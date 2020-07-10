import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minimize-angular-bot',
  templateUrl: './minimize-angular-bot.component.html',
  styleUrls: ['./minimize-angular-bot.component.css']
})
export class MinimizeAngularBotComponent implements OnInit {
  @Output() minimizedValue= new EventEmitter<{value:boolean}>();

  constructor() { }

  ngOnInit(): void {
  }

  minimizeChat(){
    console.log("here")
    this.minimizedValue.emit({value:true})

  }
}
