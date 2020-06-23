import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  api_key="AIzaSyCi8AR4mEeLT3b-eikwzDGlAYdWC6DZGT4"
  youtubeId="UCJtEuR-Ud8j1x_PzxAoEbHA"
  blogs=[]

  data=[];
  id=[]

  str="https://www.youtube.com/embed/sPtNUoZUgqc"
  constructor(private http:HttpClient, private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.spinner.showSpinner()
    this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.api_key}&channelId=${this.youtubeId}&part=snippet,id&order=date&maxResults=20`).subscribe(res=>{

    this.spinner.hideSpinner()
      this.data= res['items']
      for(var i=0;i<this.data.length-1;i++){
        this.blogs.push(
          {
            'title':this.data[i]['snippet']['title'],
            "link":"https://www.youtube.com/watch?v="+this.data[i]['id']['videoId'],
            "embeddedLink":"https://www.youtube.com/embed/"+this.data[i]['id']['videoId']
          }
        )
      }

    })

    }

}
