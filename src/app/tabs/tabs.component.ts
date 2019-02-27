import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public tabs:any[];
  constructor() { }

  ngOnInit() {
    this.tabs=[
      {
        title:'Accomodation',
        subtitle:'Perfect solution',
        detail:'hotel, apartment, hostel, guest house',
        img:'/assets/img/Tabs/accomodation/hotel.svg',
        active:false
      },
      {
        title:'Tourist Attractions',
        subtitle:'Search for your favourite',
        detail:'resturant, museum, hotel, attractions',
        img:'assets/img/Tabs/tourist attractions/big-ben.svg',
        active:true
      },
      {
        title:'Restaurants',
        subtitle:'You are hungry',
        detail:'chinese food, burger, traditional food',
        img:'assets/img/Tabs/restaurants/hamburger.svg',
        active:false
      },
      {
        title:'Event & Tickets',
        subtitle:"It's  time to have fun ",
        detail:'concerts, cinema, exhibitions',
        img:'assets/img/Tabs/events/ticket.svg',
        active:false
      },
      {
        title:'Coffee Shop',
        subtitle:'You must wake up',
        detail:'Starbucks, Filicori, Nestcafe, Lavazza',
        img:'assets/img/Tabs/coffee shop/coffee-cup.svg',
        active:false
      },
      {
        title:'Gouvernement',
        subtitle:'Must See',
        detail:'parliament building, district court, royal house',
        img:'assets/img/Tabs/gouvernement/museum.svg',
        active:false
      }
    ]
  }

}
