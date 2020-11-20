import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  // @Input() message;
  // @Input() id: string;
 // message;
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
   element: any;
  constructor( private el: ElementRef,private activeModal: NgbActiveModal ) {

   }

  ngOnInit(): void {



  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
