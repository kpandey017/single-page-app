import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public articles=[]
  constructor() {
    this.articles=[
      {
        title:'Exploring the food in the heart of the london',
        detail:'by Felecia Wilson',
        date:'25 Aug, 2016'
      },
      {
        title:'The history and architecture of England',
        detail:'by Felecia Wilson',
        date:'25 Aug, 2016'
      },
      {
        title:'Exploring the food in the heart of the london',
        detail:'by Felecia Wilson',
        date:'25 Aug, 2016'
      }
    ]
   }

  ngOnInit() {
    
  }

}
