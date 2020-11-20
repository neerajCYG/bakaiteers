import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SanitizerPipe } from './pipes/sanitizer.pipe';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faWindowRestore, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faFacebook, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AngularChatBotComponent } from './components/angular-chat-bot/angular-chat-bot.component';
import { MinimizeAngularBotComponent } from './components/minimize-angular-bot/minimize-angular-bot.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SearchVideoComponent } from './components/search-video/search-video.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    BlogsComponent,
    ModalComponent,
    AboutPageComponent,
    SanitizerPipe,
    ChatbotComponent,
    AngularChatBotComponent,
    MinimizeAngularBotComponent,
    SocialLoginComponent,
    SearchVideoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCollapseModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SocialLoginModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '870665867071-ojnhns10f3qsfhpl0vrapcgn3mqrhltl.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('268798031150499')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary){
    library.addIcons(faSquare, faCheckSquare, farSquare
      , farCheckSquare, faStackOverflow, faGithub, faMedium, faFacebook, faLinkedin,faInstagram, faWindowRestore, faPencilAlt, faGoogle);
  }

 }
