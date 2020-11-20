import { Injectable } from '@angular/core';
import { Subject,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 //url= "http://localhost:3000/login";
 userEvent = new Subject<any>();
   url= "http://147.139.37.217:3000/login";
   loginVerify = new Subject();
  constructor(private http:HttpClient) { }

  login(userObject){

    return this.http.post(this.url,userObject).pipe(
      tap(
        resData=>{
          console.log(resData)
          this.userEvent.next(resData['token']);
        }
      )
    )

  }

  isUserLogged(user){
   // this.userEvent.next(user);
  }

  autoLogin(){
    const token= JSON.parse(localStorage.getItem('token'));
    console.log(token)
    if(!token){
       return null;
    }

    this.userEvent.next(token);

    // this.userEvent.subscribe(user=>{
    //   console.log("here")
    //   console.log(user)
    // })


   }

}
