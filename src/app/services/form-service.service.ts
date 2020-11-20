import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from '../components/confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  messageEvent= new Subject<any>();

  //url= "http://localhost:3000/formdata";
  url= "http://147.139.37.217:3000/formdata";
  constructor(private http:HttpClient,private modalService: NgbModal) { }

  submitFormData(userData){

    return this.http.post(this.url,userData);

  }

  confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmModalComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;

    return modalRef.result;
  }
}
