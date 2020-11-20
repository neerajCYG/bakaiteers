import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
   user = new Subject();
  constructor(private http:HttpClient) { }

  isuserActive(token){
    this.user.next(token);
  }
}
