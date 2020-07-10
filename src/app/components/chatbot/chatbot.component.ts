 import { Component ,OnInit, Renderer2, ElementRef,ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup,FormsModule,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css' ]
})
export class ChatbotComponent implements OnInit {
  edited=true;
  minimize=false;
  TextMsg:FormGroup;
  sendButton:boolean;
  bottext:string;
  randomStuff:Array<string>=["Hello Nice to here you","Hey Whatsupp","How can I help you","I am your assitant","I am unable to get"];
  @ViewChild('chatting')chatting:ElementRef;
  @ViewChild('chatIcon')chatIcon:ElementRef;
  @ViewChild('close')close:ElementRef;
  scroll:number;
  constructor(private formBuilder:FormBuilder,private renderer:Renderer2){
    this.sendButton=true
  }
  ngOnInit(){
  }
  title = 'ChatBotApp';

  onHover(){
    console.log("here")
  }

  onValueChange(data){
  this.edited=data['value']
  }




  openDialog(){
    this.edited=false;
    this.scroll= document.documentElement.scrollTop
    this.chatting.nativeElement.style.display= "contents"
    this.chatIcon.nativeElement.style.display="none"
    this.close.nativeElement.style.display="contents"



  }



}
