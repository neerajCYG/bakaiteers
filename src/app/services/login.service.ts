import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//  url= "http://localhost:3000/login";
  url= "http://147.139.37.217:3000/login";
   loginVerify = new Subject();
  constructor(private http:HttpClient) { }

  login(userObject){

    return this.http.post(this.url,userObject);

  }


}
