import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AssistenceService } from '../../services/assistence.service';
import { map } from 'rxjs';
import { AddAssistenceComponent } from '../add-assistence/add-assistence.component';

@Component({
  selector: 'app-list-assistence',
  templateUrl: './list-assistence.component.html',
  styleUrls: ['./list-assistence.component.scss']
})
export class ListAssistenceComponent implements OnInit {

  
  dataSource: any[] = [];
  displayedColumns: string[] = ['assistenceId','nom','adresse', 'telephone','email','catastropheId'];
  constructor(public dialog: MatDialog,private toaster : ToastrService,private assistenceService : AssistenceService) { }

  ngOnInit(): void {
    this.getAllAssistence();
  }

  getAllAssistence() {
    this.assistenceService.getAllAssistence().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource = data.map(backendData => ({
          assistenceId: backendData[0],
          nom: backendData[1],
          adresse: backendData[2],
          telephone: backendData[3],
          email:backendData[4],
          catastropheId: backendData[5],
        }));
      })
    ).subscribe();
  }

  addAssistence(){
    const dialogRef = this.dialog.open(AddAssistenceComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });

  }

  editAssistence(element:any){

    const dialogRef = this.dialog.open(AddAssistenceComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllAssistence();
      }
    });

  }

  deleteAssistence(id:any){
    this.assistenceService.deleteAssistence(id).subscribe(
      (data: any) => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        this.getAllAssistence();
        
        
      },
      (      error: { error: any; }) => {
        
        
      }
    );

  }

}
