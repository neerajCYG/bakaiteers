import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean=false;
  isCollapsed = true;
  isLoginModalOpen:boolean=false;
  userName="";
  constructor(private router:Router,private authService: SocialAuthService, private loginService:LoginService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
      this.userName=this.user.name;
    });

    this.loginService.userEvent.subscribe(res=>{
      console.log(res);
      if(res){
        this.loggedIn= true;
      }
    })

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

  onChangeLoginModal(data:{isLoginModalOpenValue:boolean}){
    this.isLoginModalOpen= data['isLoginModalOpenValue'];
  }
}
