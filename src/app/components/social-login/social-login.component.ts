import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean=false;
  constructor(private router:Router, private authService: SocialAuthService, private loginService:LoginService) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe(user=>{
      this.user=user;
      const loginObj= {
        userEmail:this.user.email,
        username:this.user.name
      }
      this.loginService.login(loginObj).subscribe(response=>{
        console.log(response);
        const token= localStorage.setItem('token', response['token']);
        this.router.navigate(['']);

      }, errorMessage=>{
        console.log(errorMessage)
      })


    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

  }


  signOut(): void {
    this.authService.signOut();
  }

  closeLoginModal(){

  }

}
