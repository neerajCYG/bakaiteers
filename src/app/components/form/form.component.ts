import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormServiceService } from 'src/app/services/form-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputForm:FormGroup;
  value:number;
  duplicateData;
  message="Helloooo";
  formSubmitted=false;
  uniqueData;
  modalId="exampleModal"
  dropdownError=false;
  states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  constructor(private confirmationDialogService:FormServiceService ,private detectChanges:ChangeDetectorRef, private modalService:NgbModal, private formService:FormServiceService, private spinnerService:SpinnerService) { }
  closeResult='';
  ngOnInit(): void {
    this.inputForm= new FormGroup({
      'userData': new FormGroup({
        'email':new FormControl(null, [Validators.required, Validators.email]),
        'name': new FormControl(null, Validators.required ),
      'phone': new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10), this.validatingNumber.bind(this)]),
      'address1': new FormControl(null,Validators.required),
      'address2': new FormControl(null),
      'city': new FormControl(null,Validators.required),
      'state': new FormControl(null,[Validators.required, this.validatingDropdown.bind(this)]),
      'zip': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.maxLength(6)])
      }),

    });
  }

  onSubmit(){
    console.log(this.inputForm.value)
    this.spinnerService.showSpinner();
    this.formService.submitFormData(this.inputForm.value).subscribe(res=>{
      this.spinnerService.hideSpinner();
      this.formSubmitted=true;
      console.log(res);
      console.log(res['message'])
      if(res['message']=="Forms saved successfully!"){

        console.log("here")
        this.inputForm.reset();


        this.message="Hurray!! Data is submitted successfully. Redirecting you to the event..."
        this.confirmModal(this.message);
      }
      else if(res['message']=="Email Exists"){
        console.log("here")
        this.message="Entry is already submitted with the Email entered.";
        this.confirmModal(this.message);
      }
      else if(res['message']=="Phone Number Exists"){



        this.message="Entry is already submitted with the Phone Number entered.";
        this.confirmModal(this.message);
      }

      else if(res['message']=="Data exists"){



        this.message="Data already exists in the system.";
        this.confirmModal(this.message);

      }

    })





  }

  validatingNumber(control:FormControl):{[s:string]:boolean}{
    if(typeof control.value === "number"){

      return {"field":true};

    }
      return null;
  }

  validatingDropdown(control:FormControl):{[s:string]:boolean}{
    if(control.value=== "Choose..."){

      return {"field":true};

    }
      return null;
  }

  selectionChange(event){
    console.log(event.target.value)
    if(event.target.value=="Choose..."){
      this.dropdownError=true;
    }
    this.dropdownError=false;
  }

  // confirmModal(content){
  //   this.modalService.open(content);
  // }

  confirmModal(messageC){



    console.log(messageC)
          this.confirmationDialogService.confirm('Form',messageC)
          .then((confirmed) => console.log('User confirmed:', confirmed))
          .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));





}
}
