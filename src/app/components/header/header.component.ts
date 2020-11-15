import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean=false;
  public isCollapsed = true;
  isLoginModalOpen=false;
  constructor(private router:Router,private authService: SocialAuthService) { }
  timer=1
  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      console.log(this.loggedIn)
    });

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

  openLoginDialog(){
    this.isLoginModalOpen=true;
  }

  loggingOut(){
    this.authService.signOut();
    this.loggedIn=false;
    this.isLoginModalOpen= false;
  }
}
