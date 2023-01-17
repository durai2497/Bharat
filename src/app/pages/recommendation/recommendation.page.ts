import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: 'recommendation.page.html',
  styleUrls: ['recommendation.page.scss'],
})
export class RecommendationPage implements OnInit{
  cards=[];

  constructor() {}

  ngOnInit() {
    this.loadProfileCards()
  }
  
  loadProfileCards(){
    this.cards = [
      {
        img: "assets/img/animals.jpg",
        title: "Raj",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/nature.jpg",
        title: "Durai",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/tech.jpg",
        title: "CJ",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/animals.jpg",
        title: "Saran",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/nature.jpg",
        title: "Ebi",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/tech.jpg",
        title: "Shafin",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/animals.jpg",
        title: "Abi",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/nature.jpg",
        title: "Anu",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/tech.jpg",
        title: "Deva",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      },
      {
        img: "assets/img/animals.jpg",
        title: "God",
        description: "25Yrs, 5.ft 5 in, B.tech, Developer, Uthirattathi, Hindu, Kanyakumari, Tamilnadu , India - 629163.",
        shortListed:false
      }
    ];
  }
}
