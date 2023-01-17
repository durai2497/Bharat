import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit , AfterViewInit{
  @ViewChildren('Cards')profileCards: QueryList<ElementRef>;
  @ViewChild('profileCard')profileCard: ElementRef
  profileCardsArray: Array<ElementRef>;
  @Input() cards: any[];
 
  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
 
  constructor(private renderer: Renderer2,
    private gestureCtrl: GestureController,
    private toastController: ToastController,
    private router: Router) {}
    
  ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 0.5;
    this.profileCardsArray = this.profileCards.toArray();
    this.profileCards.changes.subscribe(() => {
      this.profileCardsArray = this.profileCards.toArray();
    });
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.profileCard.nativeElement,
      gestureName: 'my-gesture',
      onMove: (detail) => {
        this.swipeCardGesture(detail);
      }
    }, true);
    gesture.enable();
  }

  swipeCardGesture(event:any) {
  
    if (!this.cards.length) return;

    this.renderer.removeClass(this.profileCardsArray[0].nativeElement, 'moving');

    const keep = Math.abs(event.deltaX) < 0 ;
    if (keep) {
      this.renderer.setStyle(
        this.profileCardsArray[0].nativeElement,
        'transform',
        ''
      );
      this.shiftRequired = false;
    } else {
      let endX = Math.max(
        Math.abs(event.velocityX) * this.moveOutWidth,
        this.moveOutWidth
      );
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(
        this.profileCardsArray[0].nativeElement,
        'transform',
        'translate(' +
          toX +
          'px, ' +
          (toY + event.deltaY) +
          'px) rotate(' +
          rotate +
          'deg)'
      );

      this.shiftRequired = true;

    }
    this.transitionInProgress = true;
    if (event.deltaX > 0) {
      this.toggleChoiceIndicator(false, true);
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator(true, false);
    }
  }

  toggleChoiceIndicator(cross, heart) {
    if(cross) this.toast('Profile rejected','close-circle','danger')
    if(heart) this.toast('Profile Liked','heart','success')
  }

  handleShift() {
    this.transitionInProgress = false;
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    }
  }

  async toast(message:any,icon:any,color:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 500,
      position: 'bottom',
      icon:icon,
      color: color
    });

    await toast.present();
  }


  profileSelect(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.renderer.setStyle(
        this.profileCardsArray[0].nativeElement,
        'transform',
        'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)'
      );
      this.toggleChoiceIndicator(false, true);
    } else {
      this.renderer.setStyle(
        this.profileCardsArray[0].nativeElement,
        'transform',
        'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)'
      );
      this.toggleChoiceIndicator(true, false);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }
  
  profileShortlist(i:any){
    if(this.cards[i].shortListed){
      this.cards[i].shortListed=false;
      this.toast('Profile removed from ShortList','star-outline','light')
    }else{
      this.cards[i].shortListed=true;
      this.toast('Profile ShortListed','star','light');
    }
  
  }

  openProfile(name:any){
    this.router.navigate(['/viewProfile'], {
      queryParams: {
        profileName: name,
      },
  });
  }
}
