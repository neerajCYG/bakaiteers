import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  url= "http://localhost:3000/output?message="
  constructor(private http:HttpClient) { }

  getMessageOutput(inputText:string){
    console.log("I am here", inputText)
    console.log(this.url+inputText)
    return this.http.get(this.url+inputText)
  }
}
