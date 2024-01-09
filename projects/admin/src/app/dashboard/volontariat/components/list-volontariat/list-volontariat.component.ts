import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VolontariatService } from '../../services/volontariat.service';
import { map } from 'rxjs';
import { AddVolontariatComponent } from '../add-volontariat/add-volontariat.component';

@Component({
  selector: 'app-list-volontariat',
  templateUrl: './list-volontariat.component.html',
  styleUrls: ['./list-volontariat.component.scss']
})
export class ListVolontariatComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = ['volontariatId','nom','adresse', 'telephone','email','disponibilite','catastropheId'];
  constructor(public dialog: MatDialog,private toaster : ToastrService,private volontariatService :VolontariatService ) { }

  ngOnInit(): void {
    this.getAllVolontariat();
  }

  getAllVolontariat() {
    this.volontariatService.getAllVolontariat().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource = data.map(backendData => ({
          volontariatId: backendData[0],
          nom: backendData[1],
          adresse: backendData[2],
          telephone: backendData[3],
          email:backendData[4],
          disponibilite:backendData[5],
          catastropheId: backendData[6],
        }));
      })
    ).subscribe();
  }

  addVolontariat(){
    const dialogRef = this.dialog.open(AddVolontariatComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });

  }

  editVolontariat(element:any){

    const dialogRef = this.dialog.open(AddVolontariatComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllVolontariat();
      }
    });

  }

  deleteVolontariat(id:any){
    this.volontariatService.deleteVolontariat(id).subscribe(
      (data: any) => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        this.getAllVolontariat();
        
        
      },
      (      error: { error: any; }) => {
        
        
      }
    );

  }

}
