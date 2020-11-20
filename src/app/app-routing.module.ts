import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  {path:'', component:MainComponent,
    // children:[
    //   {path:'login', component:SocialLoginComponent}

    // ]
  },
  {path:'about', component:AboutPageComponent},
  // {path:':id', component:MainComponent},
  {path:'inputform', component:FormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
