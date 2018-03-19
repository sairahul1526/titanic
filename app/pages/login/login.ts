import { Component } from "@angular/core";
import {Page} from "ui/page";

import { Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router"

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "login",
  templateUrl: "./pages/login/login.html",
  styleUrls: ['pages/login/login.css']
})
export class LoginComponent {

  images = [];
  loggedIn = true;

  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
    this.images = [
      { title: '', url: '~/images/fashion-3212158_960_720.jpg' },
      { title: '', url: '~/images/adult-1836445_960_720.jpg' },
      { title: '', url: '~/images/girl-410334_960_720.jpg' },
    ];
    firebase.getCurrentUser()
    .then(user => this.router.navigate(["dashboard"], {clearHistory: true}))
    .catch(error => this.loggedIn = false);
  }
  login() {
    let self = this;
    firebase.login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ['public_profile', 'email', 'user_birthday']
        }
      }).then(
          function (result) {
            JSON.stringify(result);
            console.dir(result);
            self.router.navigate(["dashboard"]);
          },
          function (errorMessage) {
            console.log(errorMessage);
          }
      );
  }
}
