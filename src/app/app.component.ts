import { Component ,OnInit, Renderer2, ElementRef,ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup,FormsModule,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Bakaiteers';

  constructor(private formBuilder:FormBuilder,private renderer:Renderer2){

  }

  ngOnInit(){
  }

}
