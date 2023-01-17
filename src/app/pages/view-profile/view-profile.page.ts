import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  profileName: string;
  profileImages =  [];
  aboutDetails=[];
  religiousDetails=[];

  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    autoHeight: true,
    pagination: {
      clickable: true,
      type: 'bullets',
    },
    autoplay: false,
    loop: true,
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.profileName=this.route.snapshot.queryParamMap.get('profileName')
  }

  ngAfterViewInit(){
    this.profileImages =  [
      {
        img: "assets/img/animals.jpg"
      },
      {
        img: "assets/img/nature.jpg"
      },
      {
        img: "assets/img/tech.jpg"
      }
    ];
    this.aboutDetails=[
        {
          logoName:'clipboard-outline',
          desc:'Profile created by parents'
        },
        {
          logoName:'reader-outline',
          desc:'I am making this profile for my son'
        },
        {
          logoName:'person-outline',
          desc:'26 years and 11 months.5'+'`'+'11"'
        },
        {
          logoName:'man-outline',
          desc:'70Kg, Average Build'
        },
        {
          logoName:'shield-checkmark-outline',
          desc:'Never Married.'
        },
        {
          logoName:'person-outline',
          desc:'Mother tongue is Tamil'
        },
        {
          logoName:'location-outline',
          desc:'Lives in Marthandam'
        },
        {
          logoName:'location-outline',
          desc:'Ancestors origin - tamilnadu/kuzhithurai'
        },
        {
          logoName:'flag-outline',
          desc:'Indian citizen'
        },
        {
          logoName:'restaurant-outline',
          desc:'Non-vegetrain'
        },
        {
          logoName:'wine-outline',
          desc:'Doesn`t Drink'
        },
        {
          logoName:'logo-no-smoking',
          desc:'Doesn`t Smoke'
        }
    ];
    this.religiousDetails=[
      {
        logoName:'bonfire-outline',
        desc:'Hindu'
      },
      {
        logoName:'reader-outline',
        desc:'Nadar'
      },
      {
        logoName:'git-network-outline',
        desc:'Siva goudram'
      },
      {
        logoName:'star',
        desc:'Star Uthirattathi, Rassi is meenam'
      }
    ];
  }
  
}
