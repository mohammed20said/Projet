import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LogistiqueService } from '../../services/logistique.service';
import { map } from 'rxjs';
import { AddLogistiqueComponent } from '../add-logistique/add-logistique.component';

@Component({
  selector: 'app-list-logistique',
  templateUrl: './list-logistique.component.html',
  styleUrls: ['./list-logistique.component.scss']
})
export class ListLogistiqueComponent implements OnInit {


  dataSource: any[] = [];
  displayedColumns: string[] = ['logistiqueId','latitude','longitude', 'description','catastropheId'];
  constructor(public dialog: MatDialog,private toaster : ToastrService,private logistiqueService : LogistiqueService) { }

  ngOnInit(): void {
    this.getAllLogistique();
  }

  getAllLogistique() {
    this.logistiqueService.getAllLogistique().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource = data.map(backendData => ({
          logistiqueId: backendData[0],
          latitude: backendData[1],
          longitude: backendData[2],
          description: backendData[3],
          catastropheId: backendData[4],
        }));
      })
    ).subscribe();
  }

  addLogistique(){
    const dialogRef = this.dialog.open(AddLogistiqueComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });

  }

  editLogistique(element:any){

    const dialogRef = this.dialog.open(AddLogistiqueComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllLogistique();
      }
    });

  }

  deleteLogistique(id:any){
    this.logistiqueService.deleteLogistique(id).subscribe(
      (data: any) => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        this.getAllLogistique();
        
        
      },
      (      error: { error: any; }) => {
        
        
      }
    );

  }

}
