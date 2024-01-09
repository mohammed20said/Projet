import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CatastropheService } from '../../../catastrophe/services/catastrophe.service';
import { AideService } from '../../services/aide.service';
import { map } from 'rxjs';
import { AddAideComponent } from '../add-aide/add-aide.component';

@Component({
  selector: 'app-list-aide',
  templateUrl: './list-aide.component.html',
  styleUrls: ['./list-aide.component.scss']
})
export class ListAideComponent implements OnInit {

  dataSource1: any[] = [];
  dataSource2: any[] = [];
  displayedColumns: string[] = ['aideId', 'description','montant','catastropheId'];

  constructor(public dialog: MatDialog,private toaster : ToastrService,private catastropheService : CatastropheService,private aideService:AideService) { }

  ngOnInit(): void {
    this.getAllAides();
  }


  getAllAides() {
    this.aideService.getAllAides().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource1 = data.map(backendData => ({
          aideId: backendData[0],
          description: backendData[1],
          montant: backendData[2],
          catastropheId: backendData[3],
        }));
      })
    ).subscribe();
  }

  addAide(){

    const dialogRef = this.dialog.open(AddAideComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });

  }

  editAide(element:any){
    const dialogRef = this.dialog.open(AddAideComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllAides();
      }
    });
  }


  deleteAide(id:any){
    this.aideService.deleteAide(id).subscribe(
      (data) => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        alert(data)
        this.getAllAides();
        
        
      },
      error => {
        alert(error.error)
        
      }
    );

  }


}
