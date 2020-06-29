import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(document.documentElement.scrollTop)
  }

  headerLink(){
    this.isCollapsed=true;
  }
  backHome(){
    document.documentElement.scrollTop=0
    this.router.navigate(['']);
  }
}
