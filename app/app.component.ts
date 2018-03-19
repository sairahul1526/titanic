import { Component } from "@angular/core";

const firebase = require("nativescript-plugin-firebase");

import { Router } from "@angular/router"; 

@Component({
  selector: "my-app",
  template: `
      <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent {

  constructor(private router: Router) {
    let self = this;
    firebase.init({
      onAuthStateChanged: function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
          console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
          if (data.loggedIn) {
              console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
          }
      },
  
    }).then(instance => {
        console.log("firebase.init done");
    }).catch(err => {
        console.log("Firebase init error: " + err);
    });
    
  }
}
