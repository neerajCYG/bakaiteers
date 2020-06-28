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
  }

  headerLink(){
    this.isCollapsed=true;
  }
  backHome(){
    this.router.navigate(['']);
  }
}
