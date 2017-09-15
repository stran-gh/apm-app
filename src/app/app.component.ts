import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyD-fllZlrSRxkoGjEvINgCVwp30mdjc9cE",
    	authDomain: "apmproject-438ac.firebaseapp.com",
      databaseURL: "https://apmproject-438ac.firebaseio.com"
  	});
  }
}

