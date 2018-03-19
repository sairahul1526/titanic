import { Component, ElementRef, ViewChild } from "@angular/core";
import {Page} from "ui/page";
import { Router } from "@angular/router";

import { registerElement } from 'nativescript-angular';

import {
    SwipeLayout,
    ANIMATION_STATE,
    GESTURE_MODE,
    SwipeLeftEventData,
    SwipeRightEventData,
    SwipeUpEventData,
    SwipeDownEventData
} from 'nativescript-swipe-layout';
import { ANIMATION_PROPERTIES } from "tns-core-modules/ui/animation/keyframe-animation";

registerElement('SwipeLayout', () => SwipeLayout);

@Component({
  selector: "dashboard",
  templateUrl: "./pages/dashboard/dashboard.html",
  styleUrls: ['pages/dashboard/dashboard.css']
})

export class DashboardComponent {
  private _swipeLayouts: Array<SwipeLayout>;
  private currentSwipeLayout: SwipeLayout;
  public swipeLayoutAnimated: ANIMATION_STATE;
  public gestureMode: GESTURE_MODE;


  public cards: Array<any> = [{
      img: "https://pixnio.com/free-images/2017/11/30/2017-11-30-18-10-07-1200x800.jpg",
      name: "Batman ",
      age: 15,
      about: "test metest metest metest metest metest metest metest metest metest metest metest metest metest metest metest metest me"
  },
  {
      img: "https://c.pxhere.com/photos/b5/3c/blonde_hair_fashion_girl_hipster_kimono_sandals_sunglasses_woman-1268302.jpg!d",
      name: "is",
      age: 15,
      about: "test me"
  }, {
      img: "https://cdn.pixabay.com/photo/2016/03/27/20/57/sunglasses-1284255_960_720.jpg",
      name: "pretty",
      age: 15,
      about: "test me"
  }, {
      img: "https://c.pxhere.com/photos/4c/8d/photo-1405706.jpg!d",
      name: " cool ",
      age: 15,
      about: "test me"
  }, {
      img: "https://c.pxhere.com/photos/3d/69/woman_portrait_female_lady_sunglass-1397104.jpg!d",
      name: "right",
      age: 15,
      about: "test me"
  }, {
      img: "https://c.pxhere.com/photos/b2/79/photo-180438.jpg!d",
      name: "?",
      age: 15,
      about: "test me"
  }]

  constructor(page: Page, private router: Router) {
      page.actionBarHidden = true;
      this._swipeLayouts = new Array();
      console.log(JSON.stringify(ANIMATION_STATE));
      this.swipeLayoutAnimated = 1;
      this.gestureMode = 0;
  }

  swipeLayoutLoaded(event) {
      this._swipeLayouts.push(<SwipeLayout>event.object);
  }

  ngAfterViewInit(): void {
      this.currentSwipeLayout = this._swipeLayouts[this._swipeLayouts.length - 1];
  }


  swipeLeftCallback(swipeLeftEvent: SwipeLeftEventData) {
      console.log('swipeLeft');
      this.next();
  }

  private next() {
      this._swipeLayouts.pop();
      this.currentSwipeLayout = this._swipeLayouts[this._swipeLayouts.length - 1];
  }

  swipeRightCallback(swipeRightEvent: SwipeRightEventData) {
      console.log('swipeRight');
      this.next();
  }
  swipeUpCallback(swipeUpEvent: SwipeUpEventData) {
      console.log('swipeUp');
      this.next();
  }
  swipeDownCallback(swipeDownEvent: SwipeDownEventData) {
      console.log('swipeDown');
      this.next();
  }

  goAway() {
      let that = this;
      this.currentSwipeLayout.animateSwipeRight().then(() => {
          that.next();
          console.log('swipeLeft done');
      });
  }


  comeHere() {
      let that = this;
      this.currentSwipeLayout.animateSwipeLeft().then(() => {
          that.next();
          console.log('swipeRight done');
      });
  }

  super() {
      let that = this;
      this.currentSwipeLayout.animateSwipeUp().then(() => {
          that.next();
          console.log("swipeUp done");
      });
  }

  chat() {
    this.router.navigate(["chat"])
  }

  setings() {

  }
}