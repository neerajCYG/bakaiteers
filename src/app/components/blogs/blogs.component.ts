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

  data=[
    {
      'title':null,
      "link":null,
      "embeddedLink":null
    }
  ];
  id=[]

  str="https://www.youtube.com/embed/sPtNUoZUgqc"
  constructor(private http:HttpClient, private spinner:SpinnerService) { }

  ngOnInit(): void {
   // this.spinner.showSpinner()
    // this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.api_key}&channelId=${this.youtubeId}&part=snippet,id&order=date&maxResults=20`).subscribe(res=>{

    // this.spinner.hideSpinner()
    //   this.data= res['items']
    //   for(var i=0;i<this.data.length-1;i++){
    //     this.blogs.push(
    //       {
    //         'title':this.data[i]['snippet']['title'],
    //         "link":"https://www.youtube.com/watch?v="+this.data[i]['id']['videoId'],
    //         "embeddedLink":"https://www.youtube.com/embed/"+this.data[i]['id']['videoId']
    //       }
    //     )
    //   }

    // })

    this.blogs=[
      {
        'title':"BakaiTeers | Work From Home",
        "link":"https://www.youtube.com/watch?v=P9aoqhUSoGQ",
        "embeddedLink":"https://www.youtube.com/embed/P9aoqhUSoGQ"
      },
      {
        'title':"BakaiTeers- Breaking News | Coming Soon",
        "link":"https://www.youtube.com/watch?v=QylD2UVQbds",
        "embeddedLink":"https://www.youtube.com/embed/QylD2UVQbds"
      },
      {
        'title':"BakaiTeers | Quarantine",
        "link":"https://www.youtube.com/watch?v=AHpAuFjP4jQ",
        "embeddedLink":"https://www.youtube.com/embed/AHpAuFjP4jQ"
      },
      {
        'title':"BakaiTeers vs TikToker",
        "link":"https://www.youtube.com/watch?v=sPtNUoZUgqc",
        "embeddedLink":"https://www.youtube.com/embed/sPtNUoZUgqc"
      }

    ]
  }

}
