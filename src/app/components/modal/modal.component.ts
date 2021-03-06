import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  message=null;
  messageDelivered=false;
  queryForm:FormGroup
  constructor(private spinner:SpinnerService,config: NgbModalConfig, private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit(): void {

    this.queryForm= new FormGroup({

        'name': new FormControl(null, [Validators.required]),
        'email':new FormControl(null, [Validators.required, Validators.email]),
        'content':new FormControl(null)

    })
  }

  sendQuery(content){
    this.messageDelivered=false;
    this.queryForm.reset();
    this.modalService.open(content);
  }

  onSubmit(value){

    this.messageDelivered=true;
    this.spinner.showSpinner()

    const url="https://heroku-node-bakaiteers.herokuapp.com"
    this.http.post("http://147.139.37.217:3000/send", value).subscribe(res=>{
      this.spinner.hideSpinner()
    if(res){

        this.message="Message sent successfully"
      }
    },error=>{

      this.message="Something went wrong. Please try again later"

      }
    )
  }

}
