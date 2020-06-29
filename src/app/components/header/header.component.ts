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
  timer=1
  ngOnInit(): void {
  }

  headerLink(){
    this.isCollapsed=true;
  }
  backHome(){
    var refreshId = setInterval(function() {
      document.documentElement.scrollTop=document.documentElement.scrollTop - 30;
      if (document.documentElement.scrollTop<= 0) {
        clearInterval(refreshId);
      }
    }, 1);
    this.router.navigate(['']);
  }
}
