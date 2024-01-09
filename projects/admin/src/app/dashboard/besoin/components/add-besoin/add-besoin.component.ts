import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CatastropheComponent } from '../../../catastrophe/components/addcatastrophe/catastrophe.component';
import { CatastropheService } from '../../../catastrophe/services/catastrophe.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BesoinService } from '../../services/besoin.service';
import { ConfirmationComponent } from '../../../tasks-admin/components/confirmation/confirmation.component';

@Component({
  selector: 'app-add-besoin',
  templateUrl: './add-besoin.component.html',
  styleUrls: ['./add-besoin.component.scss']
})
export class AddBesoinComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private fb:FormBuilder , public dialog: MatDialogRef<CatastropheComponent> , public matDialog:MatDialog,private service:CatastropheService,private spinner: NgxSpinnerService,private toaster : ToastrService,private besoinService : BesoinService) { }


  newTaskForm! : FormGroup;
  formValues : any;
  catastropheIds: number[] = [];
  ngOnInit(): void {
    this.createForm();
    this.getCatastropheIds();
  }

  createForm(){
    this.newTaskForm = this.fb.group({
      
      description:[this.data?.description || '',[Validators.required]],
      catastrophe_id:[this.data?.catastrophe_id || '',[Validators.required]],
      
    })
    this.formValues = this.newTaskForm.value;

}

prepareFormData() {
  const formData = {
    description: this.newTaskForm.value.description,
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

createBesoin(){
  const formData = this.prepareFormData();

  // Call your service method for creating an aide
  this.besoinService.createBesoin(formData).subscribe(
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

editBesoin() {
  const formData = this.prepareFormData();
  if (!formData.catastrophe.id) {
    console.error('Catastrophe ID is not defined or invalid.');
    // Handle this case (e.g., show an error message)
    return;
  }
  
  // Call your service method for updating an aide
  this.besoinService.updateBesoin(formData.description, formData.catastrophe.id, this.data.besoinId).subscribe(
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

getCatastropheIds() {
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
