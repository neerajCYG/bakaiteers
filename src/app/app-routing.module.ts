import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutPageComponent } from './components/about-page/about-page.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'about', component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
