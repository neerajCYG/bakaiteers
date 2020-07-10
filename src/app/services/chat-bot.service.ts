import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  url= "https://heroku-node-bakaiteers.herokuapp.com/output?message="
  constructor(private http:HttpClient) { }

  getMessageOutput(inputText:string){
    console.log("I am here", inputText)
    console.log(this.url+inputText)
    return this.http.get(this.url+inputText)
  }
}
