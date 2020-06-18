import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  queryForm:FormGroup
  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.queryForm= new FormGroup({

        'name': new FormControl(null, [Validators.required]),
        'email':new FormControl(null, [Validators.required, Validators.email]),
        'content':new FormControl(null)

    })
  }

  sendQuery(content){

    this.modalService.open(content);
  }

  onSubmit(){
    console.log(this.queryForm)

  }

}
