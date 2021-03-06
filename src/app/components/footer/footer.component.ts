import { Component, OnInit, NgZone } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  querySent=false;
  constructor(private router:Router,config: NgbModalConfig, private modalService: NgbModal,private ngZone: NgZone) { }
  scrolledOver=0;
  footerData={}
  ngOnInit(): void {


    this.footerData={

      "youtube": [
        {
          "link":"https://www.youtube.com/channel/UCJtEuR-Ud8j1x_PzxAoEbHA",
          "title":"Subscribe Our Channel"
        }
        // {
        //   "link":"https://www.youtube.com/watch?v=P9aoqhUSoGQ&t=2s",
        //   "title":"Work From Home"
        // },
        // {
        //   "link":"https://www.youtube.com/watch?v=AHpAuFjP4jQ&t=1s",
        //   "title":"Quarantine"
        // },
        // {
        //   "link":"https://www.youtube.com/watch?v=sPtNUoZUgqc",
        //   "title":"BakaiTeers vs TikToker"
        // }
      ],
      "contact": [
        {
          "link": "https://www.facebook.com/bakaiteers/?modal=admin_todo_tour",
          "title": "Facebook",
          "image":"assets/images/facebook.jpg"
        },
        {
          "link": "https://www.instagram.com/bakaiteers/",
          "title": "Instagram",
          "image":"assets/images/instagram.jpeg"
        }
      ]
    }
  }
  sendQuery(content){
    this.querySent=true;
    this.modalService.open(content);
  }

  backHome(){
    this.router.navigate(['']);
  }

}
