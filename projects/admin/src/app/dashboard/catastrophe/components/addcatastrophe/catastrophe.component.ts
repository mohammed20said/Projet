import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CatastropheService } from '../../services/catastrophe.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../manage-users/services/users.service';
import { ConfirmationComponent } from '../../../tasks-admin/components/confirmation/confirmation.component';

@Component({
  selector: 'app-catastrophe',
  templateUrl: './catastrophe.component.html',
  styleUrls: ['./catastrophe.component.scss']
})
export class CatastropheComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private fb:FormBuilder , public dialog: MatDialogRef<CatastropheComponent> , public matDialog:MatDialog,private service:CatastropheService,private spinner: NgxSpinnerService,private toaster : ToastrService,private userService : UsersService) { }

  ngOnInit(): void {
    this.createForm();
  }

 
 
  newTaskForm! : FormGroup;
  formValues : any;

  createForm(){
    this.newTaskForm = this.fb.group({
      
      description:[this.data?.description || '',[Validators.required]],
      
    })
    this.formValues = this.newTaskForm.value;

}


createCatastrophe(){
    this.service.createCatastrophe(this.prepareFormData()).subscribe((data:any)=>{
    this.dialog.close(true);

    this.toaster.success('Task Created Successfully','Success');
})
}



prepareFormData() {
  let formData = new FormData();
  formData.append('description', this.newTaskForm.value.description);
  return formData;
}

close(){
  let hasChange=false;
  Object.keys(this.formValues).forEach((item)=>{
    
    if(this.formValues[item] !== this.newTaskForm.value[item]){
      hasChange=true;
      
    }
  })

  if(hasChange){
    const dialogRef = this.matDialog.open(ConfirmationComponent,{
      width:'750px',
      disableClose:true

    });
    dialogRef.afterClosed().subscribe(res=>{
      if(res==true){

      }
    });
  }else{
    this.dialog.close();
  }

     
}

editCatastrophe(){
  
  const formData = this.prepareFormData()
  const description = formData.get('description') as string;
  this.service.updateCatastrophe(description,this.data.id).subscribe((data:any)=>{
    this.dialog.close(true);
    this.toaster.success('Catastrophe updated Successfully','Success');
    

  },error=>{
    this.toaster.error(error.error.message,'failed')
  })
}




}
