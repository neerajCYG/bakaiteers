import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs=[{
  'title':null,
  'link':null,
  'image':null

  }]
  constructor() { }

  ngOnInit(): void {

    this.blogs=[
      {
      'title':"Work From Home",
      'link':"https://www.youtube.com/watch?v=P9aoqhUSoGQ&t=2s",
      'image':"assets/images/Thumbnail.png"
    },
    {
      'title':"Quarantine",
      'link':"https://www.youtube.com/watch?v=AHpAuFjP4jQ&t=1s",
      'image':"assets/images/Thumbnail.png"
    },
    {
      'title':"BakiTeers vs TikToker",
      'link':"https://www.youtube.com/watch?v=sPtNUoZUgqc",
      'image':"assets/images/thumbnail2.jpg"
    },
    {
      'title':"Quarantine",
      'link':"https://www.youtube.com/watch?v=AHpAuFjP4jQ&t=1s",
      'image':"assets/images/Thumbnail.png"
    }

  ]
  }

}
