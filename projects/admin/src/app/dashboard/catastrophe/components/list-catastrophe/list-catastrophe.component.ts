import { Component, OnInit } from '@angular/core';
import { CatastropheComponent } from '../addcatastrophe/catastrophe.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CatastropheService } from '../../services/catastrophe.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-catastrophe',
  templateUrl: './list-catastrophe.component.html',
  styleUrls: ['./list-catastrophe.component.scss']
})
export class ListCatastropheComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'description'];
 
  constructor(public dialog: MatDialog,private toaster : ToastrService,private catastropheService : CatastropheService) { }

  ngOnInit(): void {
    this.getAllCatastrophes();
  }

  addCatastrophe(){
    const dialogRef = this.dialog.open(CatastropheComponent, {
      width:'750px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
       console.log("it closed");
      }
    });
  }


  getAllCatastrophes() {
    this.catastropheService.getAllCatastrophes().pipe(
      map((data: any[]) => {
        // Transform the data and update dataSource1
        this.dataSource = data.map(backendData => ({
          id: backendData[0],
          description: backendData[1],
        }));
      })
    ).subscribe();
  }

 


  editCatastrophe(element:any){
    const dialogRef = this.dialog.open(CatastropheComponent, {
      width:'750px',
      data:element,
      disableClose:true

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllCatastrophes();
      }
    });
  }

  

  deleteCatastrophe(id: number): void {
    this.catastropheService.deleteCatastrophe(id).subscribe(
      () => {
        this.toaster.success("catastrophe deleted successfuly","Sucess");
        this.getAllCatastrophes();
        
        
      },
      error => {
        
        
      }
    );
  }

}
