import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {



  blogs=null;

  data=[
    {
      'title':null,
      "link":null,
      "embeddedLink":null
    }
  ];
  id=[]
  constructor(private http:HttpClient, private spinner:SpinnerService) { }

  ngOnInit(): void {

    console.log(window.screen.availHeight)
    console.log(window.screen.availWidth)
   //this.spinner.showSpinner()


  //   this.http.get('http://localhost:3000/youtubeData').subscribe(res=>{
  //     console.log(res)
  //   //this.spinner.hideSpinner()
  //  //   this.data= res['items']
  //    // for(var i=0;i<this.data.length-1;i++){
  //       // this.blogs.push(
  //       //   {
  //       //     'title':this.data[i]['snippet']['title'],
  //       //     "link":"https://www.youtube.com/watch?v="+this.data[i]['id']['videoId'],
  //       //     "embeddedLink":"https://www.youtube.com/embed/"+this.data[i]['id']['videoId']
  //       //   }
  //       // )
  //    // }

  //   })

    this.blogs= {
      "videoPart1":[
        {
          'title':"BakaiTeers | Work From Home",
          "link":"https://www.youtube.com/watch?v=P9aoqhUSoGQ",
          "embeddedLink":"https://www.youtube.com/embed/P9aoqhUSoGQ"
        },
        {
          'title':"BakaiTeers | Breaking News",
          "link":"https://www.youtube.com/watch?v=QylD2UVQbds",
          "embeddedLink":"https://www.youtube.com/embed/QylD2UVQbds"
        },
        {
          'title':"BakaiTeers | Quarantine",
          "link":"https://www.youtube.com/watch?v=AHpAuFjP4jQ",
          "embeddedLink":"https://www.youtube.com/embed/AHpAuFjP4jQ"
        },
        {
          'title':"Bakaiteers | BakaiTeers vs TikToker",
          "link":"https://www.youtube.com/watch?v=sPtNUoZUgqc",
          "embeddedLink":"https://www.youtube.com/embed/sPtNUoZUgqc"
        }
      ],
      "videoPart2":[
        {
          'title':"BakaiTeers | Horror Hungama",
          "link":"https://www.youtube.com/watch?v=0MxLtB5dWug",
          "embeddedLink":"https://www.youtube.com/embed/0MxLtB5dWug"
        },
        {
          'title':"BakaiTeers | Mom vs Manager",
          "link":"https://www.youtube.com/watch?v=iOSjekjxOFA",
          "embeddedLink":"https://www.youtube.com/embed/iOSjekjxOFA"
        },
        {
          'title':"BakaiTeers | Types of Chai Lovers",
          "link":"https://www.youtube.com/watch?v=u0qdWbfYKjo",
          "embeddedLink":"https://www.youtube.com/embed/u0qdWbfYKjo"
        },
        {
          'title':"BakaiTeers | Online Classes",
          "link":"https://www.youtube.com/watch?v=UFYrALUJadM",
          "embeddedLink":"https://www.youtube.com/embed/UFYrALUJadM"
        }

      ],
      "videoPart3":[
        {
          'title':"BakaiTeers | Day Without Phone",
          "link":"https://www.youtube.com/watch?v=OVMar4URq28",
          "embeddedLink":"https://www.youtube.com/embed/OVMar4URq28"
        },
        {
          'title':"BakaiTeers | Awaaz Ka Rahasya | Short Story",
          "link":"https://www.youtube.com/watch?v=Utk2qwkf_ms",
          "embeddedLink":"https://www.youtube.com/embed/Utk2qwkf_ms"
        },
        {
          'title':"BakaiTeers | Types of Superstitions",
          "link":"https://www.youtube.com/watch?v=AyZusz1xSMs",
          "embeddedLink":"https://www.youtube.com/embed/AyZusz1xSMs"
        },
        {
          'title':"BakaiTeers | IPL ki Takraar",
          "link":"https://www.youtube.com/watch?v=OiRQJu7BFO8",
          "embeddedLink":"https://www.youtube.com/embed/OiRQJu7BFO8"
        }

      ],
      "videoPart4":[
        {
          'title':"BakaiTeers | Pati Patni AURRR GAAANNNN",
          "link":"https://www.youtube.com/watch?v=OaNCwyrLGAs",
          "embeddedLink":"https://www.youtube.com/embed/OaNCwyrLGAs"
        }


      ]
    }
  }

}
