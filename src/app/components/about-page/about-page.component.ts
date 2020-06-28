import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  title = 'app';
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop=0
  }


}
