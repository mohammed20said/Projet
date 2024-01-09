import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BesoinService } from '../../services/besoin.service';
import { map } from 'rxjs';
import { AddBesoinComponent } from '../add-besoin/add-besoin.component';

@Component({
  selector: 'app-list-besoin',
  templateUrl: './list-besoin.component.html',
  styleUrls: ['./list-besoin.component.scss']
})
export class ListBesoinComponent implements OnInit {


  dataSource: any[] = [];
  displayedColumns: string[] = ['besoinId', 'description','catastropheId'];
 
  constructor(public dialog: MatDialog,private toaster : ToastrService,private besoinService : BesoinService) { }

  ngOnInit(): void {
    this.getAllBesoin();
  }


  getAllBesoin() {
    this.besoinService.getAllBesoin().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource = data.map(backendData => ({
          besoinId: backendData[0],
          description: backendData[1],
          catastropheId: backendData[2],
        }));
      })
    ).subscribe();
  }

  addBesoin(){
    const dialogRef = this.dialog.open(AddBesoinComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });

  }

  editBesoin(element:any){

    const dialogRef = this.dialog.open(AddBesoinComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllBesoin();
      }
    });

  }

  deleteBesoin(id:any){
    this.besoinService.deleteBesoin(id).subscribe(
      (data: any) => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        this.getAllBesoin();
        
        
      },
      (      error: { error: any; }) => {
        
        
      }
    );

  }


}
