import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CatastropheComponent } from '../../../catastrophe/components/addcatastrophe/catastrophe.component';
import { CatastropheService } from '../../../catastrophe/services/catastrophe.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { VolontariatService } from '../../services/volontariat.service';
import { ConfirmationComponent } from '../../../tasks-admin/components/confirmation/confirmation.component';

@Component({
  selector: 'app-add-volontariat',
  templateUrl: './add-volontariat.component.html',
  styleUrls: ['./add-volontariat.component.scss']
})
export class AddVolontariatComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private fb:FormBuilder , public dialog: MatDialogRef<CatastropheComponent> , public matDialog:MatDialog,private service:CatastropheService,private spinner: NgxSpinnerService,private toaster : ToastrService,private volontariatService : VolontariatService) { }
  newTaskForm! : FormGroup;
  formValues : any;
  catastropheIds: number[] = [];
  ngOnInit(): void {
    this.createForm();
    this.getCatastropheId();
  }

  createForm(){
    this.newTaskForm = this.fb.group({
      
      nom:[this.data?.nom || '',[Validators.required]],
      adresse:[this.data?.adresse || '',[Validators.required]],
      telephone:[this.data?.telephone || '',[Validators.required]],
      email:[this.data?.email || '',[Validators.required]],
      disponibilite:[this.data?.disponibilite || '',[Validators.required]],
      catastrophe_id:[this.data?.catastrophe_id || '',[Validators.required]],
      
    })
    this.formValues = this.newTaskForm.value;

}

prepareFormData() {
  const formData = {
    nom:this.newTaskForm.value.nom,
    adresse:this.newTaskForm.value.adresse,
    telephone: this.newTaskForm.value.telephone,
    email: this.newTaskForm.value.email,
    disponibilite: this.newTaskForm.value.disponibilite,
    catastrophe: {
      id: this.newTaskForm.value.catastrophe_id,
      description: '' 
    }
  };
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

createVolontariat(){
  const formData = this.prepareFormData();

  // Call your service method for creating an aide
  this.volontariatService.createVolontariat(formData).subscribe(
    (response: any) => {
      // Handle success
      this.toaster.success('Aide created successfully.');
      this.dialog.close();
    },
    (error: any) => {
      // Handle error
      console.error('Error creating aide:', error);
    }
  );

}

editVolontariat() {
  const formData = this.prepareFormData();
  if (!formData.catastrophe.id) {
    console.error('Catastrophe ID is not defined or invalid.');
    // Handle this case (e.g., show an error message)
    return;
  }
  
  // Call your service method for updating an aide
  this.volontariatService.updateVolontariat(formData.nom,formData.adresse,formData.telephone, formData.email,formData.disponibilite,formData.catastrophe.id, this.data.volontariatId).subscribe(
    (response: any) => {
      // Handle success
      this.toaster.success('Aide updated successfully.');
      this.dialog.close();
    },
    (error: { error: { message: any; }; }) => {
      // Handle error
      this.toaster.error(error.error.message || 'Failed to update aide.', 'Error');
    }
  );
}

getCatastropheId() {
  this.service.getAllCatastropheIds().subscribe(
    (ids) => {
      this.catastropheIds = ids;
      
    },
    (error) => {
      console.error('Error fetching catastrophe IDs:', error);
    }
  );
}

}
