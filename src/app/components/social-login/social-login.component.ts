import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialloginService } from 'src/app/services/sociallogin.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
 // @Input() isLoginModalOpen=false;
 userToken = new Subject<any[]>();
  @Output() isLoginModalOpen= new EventEmitter<{isLoginModalOpenValue:boolean}>();

  user: SocialUser;
  loggedIn: boolean=false;
  constructor(private socialLoginService:SocialloginService, private route:ActivatedRoute, private router:Router, private authService: SocialAuthService, private loginService:LoginService) {
   }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).catch(err=>console.log(err));
    this.authService.authState.subscribe(user=>{
      this.user=user;
      const loginObj= {
        userEmail:this.user.email,
        username:this.user.name
      }
      this.loginService.login(loginObj).subscribe(response=>{
        console.log(response);
        const token= localStorage.setItem('token', JSON.stringify(response['token']));
        this.router.navigate([response['token']],{queryParams:{loggedin:true}});


      }, errorMessage=>{
        console.log(errorMessage)
      })


    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).catch(err=>console.log(err))
    this.authService.authState.subscribe(user=>{
      this.user=user;
      const loginObj= {
        userEmail:this.user.email,
        username:this.user.name
      }
      this.loginService.login(loginObj).subscribe(response=>{
        console.log(response);
        const token= localStorage.setItem('token', response['token']);
        this.router.navigate([response['token']]);

      }, errorMessage=>{
        console.log(errorMessage)
      })


    })

  }


  signOut(): void {
    this.authService.signOut();
  }

  closeLoginModal(){
    this.isLoginModalOpen.emit({isLoginModalOpenValue:false});
  }


}
