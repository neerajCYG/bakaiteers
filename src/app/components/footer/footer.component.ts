import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  querySent=false;
  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  sendQuery(content){
    this.querySent=true;
    console.log(this.querySent)
    this.modalService.open(content);
  }

}
