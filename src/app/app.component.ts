import { Component ,OnInit, Renderer2, ElementRef,ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup,FormsModule,FormBuilder } from '@angular/forms';
import { SocialAuthService ,SocialUser} from "angularx-social-login";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: SocialUser;
  title = 'Bakaiteers';

  constructor(private loginService:LoginService, private authService: SocialAuthService,private formBuilder:FormBuilder,private renderer:Renderer2){

  }

  ngOnInit(){

    this.loginService.autoLogin();

  }

}
