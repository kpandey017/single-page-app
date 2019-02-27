import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public posts:any[];
  constructor() { }

  ngOnInit() {

    this.posts=[
      {
        title:'Exploring the food in the heart of the London',
        date :'25 Aug, 2016',
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author:'by Felecia Wilson',
        img:'/assets/img/Blog post 1/Group/photo-1457556922368-67973eb41f09/photo-1449793079811-bc4bcd990abf.png',
        authorImg:'/assets/img/Blog post 1/Group/7/7.png'
      },
      {
        title:'The history and architecture of England',
        date :'25 Aug, 2016',
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author:'by Noelle Garza',
        img:'/assets/img/Blog post 2/Group/photo-1457556922368-67973eb41f09/photo-1471623432079-b009d30b6729.png',
        authorImg:'/assets/img/Blog post 2/Group/7/66.png'
      }
    ];
  }

}
