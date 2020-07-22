import { Component ,OnInit, Renderer2, ElementRef,ViewChild, AfterViewInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import { FormGroup,FormsModule,FormBuilder } from '@angular/forms';
import {Chatbox} from './chatbot';
import { ChatBotService } from '../../services/chat-bot.service';

@Component({
  selector: 'app-angular-chat-bot',
  templateUrl: './angular-chat-bot.component.html',
  styleUrls: ['./angular-chat-bot.component.css']
})
export class AngularChatBotComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private renderer:Renderer2, private chatBotService:ChatBotService) { }
  sendButton:boolean;
  minimize=false;
  chatModal=new Chatbox("");
  typing=true;
  botTyping=false;
  bottext:string="Hello, How may I help you?";
  randomStuff:Array<string>=["Hello Nice to here you","Hey Whatsupp","How can I help you","I am your assitant","I am unable to get"];
  @ViewChild('botmsgs') divMsgs: ElementRef;
  @ViewChild('botmsgs') botMsgs: ElementRef;
  @ViewChild('cha')cha:ElementRef;
  @ViewChild('chatbot')chatbot:ElementRef;
  @ViewChild('chatIcon')chatIcon:ElementRef;
  @ViewChild('close')close:ElementRef;
  @Output() editedValue= new EventEmitter<{value:boolean}>();

  scroll:any;
  ngOnInit(): void {
    this.scroll=(document.documentElement.scrollTop+20)+"px"
    console.log(this.scroll)

  }


  chatlogs(){

    this.editedValue.emit({value:true})

  }

  onSubmit(){

    console.log(this.chatModal.inputQuery)
    if(this.chatModal.inputQuery==""){
      return false
    }else{

      //User Msgs
      const divMain= this.renderer.createElement('div');

      const divSub= this.renderer.createElement('div');
      const text=this.renderer.createText(this.chatModal.inputQuery);
      this.renderer.appendChild(divSub,text);
      this.renderer.addClass(divSub,"UserMsg");
      this.renderer.appendChild(divMain,divSub);
      this.renderer.addClass(divMain,"d-flex");
      this.renderer.addClass(divMain,"flex-row-reverse");
      this.renderer.appendChild(this.divMsgs.nativeElement,divMain);
      var out = document.getElementById("botmsgs");
      var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
      console.log(isScrolledToBottom)
      if(!isScrolledToBottom){

          out.scrollTop = out.scrollHeight - out.clientHeight;
      }


      //Bot Msgs
      let random=Math.floor(Math.random() * 5) + 0
      const botMain= this.renderer.createElement('div');
      const botimg= this.renderer.createElement('div');
      this.renderer.addClass(botimg,"botimg");
      const botSub= this.renderer.createElement('div');
      var out = document.getElementById("botmsgs");
      var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
      console.log(isScrolledToBottom)
      if(!isScrolledToBottom){

          out.scrollTop = out.scrollHeight - out.clientHeight;
      }
      if(this.chatModal.inputQuery.toLowerCase().includes("your name")){
        this.typing=false
        this.bottext=this.renderer.createText("Call Me Bakait");
        this.renderer.appendChild(botSub,botimg);
        this.renderer.appendChild(botSub,this.bottext);
        this.renderer.addClass(botSub,"botMsg");
        this.renderer.appendChild(botMain,botSub);
        this.renderer.addClass(botMain,"d-flex");
        this.renderer.appendChild(this.divMsgs.nativeElement,botMain);

      var out = document.getElementById("botmsgs");
      var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
      console.log(isScrolledToBottom)
      if(!isScrolledToBottom){

          out.scrollTop = out.scrollHeight - out.clientHeight;
      }
      let audio = new Audio();
      audio.src = '../../../assets/audios/tick.mp3';
      audio.load();
      audio.play();
      }
      // }else if(this.chatModal.inputQuery.toLowerCase().includes("what you can do")){
      //   this.bottext=this.renderer.createText("I have access to all tony stark devices");
      // }else if(this.chatModal.inputQuery.toLowerCase().includes("great")){
      //   this.bottext=this.renderer.createText("I know I was made by tony stark:)");
      // }

      // else{
      //   this.bottext=this.renderer.createText(this.randomStuff[random]);
      // }

      else{
        this.typing=true;
        this.botTyping=true;
        this.chatBotService.getMessageOutput(this.chatModal.inputQuery).subscribe( message=>{
          this.typing=false;
          this.botTyping=false;
          this.bottext=this.renderer.createText(message['output']);
          this.renderer.appendChild(botSub,botimg);
          this.renderer.appendChild(botSub,this.bottext);
          this.renderer.addClass(botSub,"botMsg");
          this.renderer.appendChild(botMain,botSub);
          this.renderer.addClass(botMain,"d-flex");
          this.renderer.appendChild(this.divMsgs.nativeElement,botMain);

        var out = document.getElementById("botmsgs");
        var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
        console.log(isScrolledToBottom)
        if(!isScrolledToBottom){

            out.scrollTop = out.scrollHeight - out.clientHeight;
        }
        let audio = new Audio();
        audio.src = '../../../assets/audios/tick.mp3';
        audio.load();
        audio.play();
        })
      }



      //Audio click
      let audio = new Audio();
      audio.src = '../../../assets/audios/tick.mp3';
      audio.load();
      audio.play();
      this.chatModal.inputQuery="" //Reseting to empty for next query

    }

  }

  Empty(){
    if(this.chatModal.inputQuery!=null){
      this.sendButton=true
    }
    if(this.chatModal.inputQuery==null){
      this.sendButton=false
    }
  }

minimizeChat(){
  this.minimize=true;
}
maximizeChat(){
  this.minimize=false;
}

}
