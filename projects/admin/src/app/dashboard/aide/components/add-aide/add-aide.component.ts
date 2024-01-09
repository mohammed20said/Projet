import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CatastropheComponent } from '../../../catastrophe/components/addcatastrophe/catastrophe.component';
import { CatastropheService } from '../../../catastrophe/services/catastrophe.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationComponent } from '../../../tasks-admin/components/confirmation/confirmation.component';
import { AideService } from '../../services/aide.service';

@Component({
  selector: 'app-add-aide',
  templateUrl: './add-aide.component.html',
  styleUrls: ['./add-aide.component.scss']
})
export class AddAideComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private fb:FormBuilder , public dialog: MatDialogRef<CatastropheComponent> , public matDialog:MatDialog,private service:CatastropheService,private spinner: NgxSpinnerService,private toaster : ToastrService,private aideService : AideService) { }
 
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
      montant:[this.data?.montant || '',[Validators.required]],
      catastrophe_id:[this.data?.catastrophe_id || '',[Validators.required]],
      
    })
    this.formValues = this.newTaskForm.value;

}

prepareFormData() {
    const formData = {
      description: this.newTaskForm.value.description,
      montant: this.newTaskForm.value.montant,
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

  createAide(){
    const formData = this.prepareFormData();

    // Call your service method for creating an aide
    this.aideService.createAide(formData).subscribe(
      (response: any) => {
        // Handle success
        this.toaster.success('Aide created successfully.');
        this.dialog.close();
      },
      (error) => {
        // Handle error
        console.error('Error creating aide:', error);
      }
    );

  }

  editAide() {
    const formData = this.prepareFormData();
    if (!formData.catastrophe.id) {
      console.error('Catastrophe ID is not defined or invalid.');
      // Handle this case (e.g., show an error message)
      return;
    }
    
    // Call your service method for updating an aide
    this.aideService.updateAide(formData.description, formData.montant, formData.catastrophe.id, this.data.aideId).subscribe(
      (response: any) => {
        // Handle success
        this.toaster.success('Aide updated successfully.');
        this.dialog.close();
      },
      (error) => {
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
