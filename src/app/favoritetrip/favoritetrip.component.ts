import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritetrip',
  templateUrl: './favoritetrip.component.html',
  styleUrls: ['./favoritetrip.component.scss']
})
export class FavoritetripComponent implements OnInit {
  public allTrips=[];
  constructor() { }

  ngOnInit() {
    this.allTrips=[
      {
        img:'/assets/img/tab 1/Discover-Fancy-Refreshing-Attractions-in-London.png'
      },
      {
        img:'/assets/img/tab 2/hm-tower-of-london-image-040-ae1b582d5c7d24c210fef7c4573af37b.png',
        title:'Tower of London',
        details:"Take a tour with one of the Yeomen Warders around the Tower of London, one of the world's most famous building",
        action:'Book Now'
      },
      {
        img:'/assets/img/tab 3/London-Eye-Pictures-720x404.png'
      },
      {
        img:'/assets/img/tab 4/London-Bridge-7.png'
      },
      {
        img:'/assets/img/tab 5/london-top-attractions-whitehall-and-parliament.png'
      }
    ]
  }

}
