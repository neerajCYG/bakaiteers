import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  url= "http://localhost:3000/formdata";
 //  url= "http://147.139.37.217:3000/login";
  constructor(private http:HttpClient) { }

  submitFormData(userData){

    return this.http.post(this.url,userData);

  }
}
