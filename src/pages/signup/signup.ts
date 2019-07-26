import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerificationPage } from '../verification/verification';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
 inputValue: string = "";
  constructor(public navCtrl: NavController) {

  }
 verification(){
	  console.log("Systems pppp" +this.inputValue);
        this.navCtrl.push(VerificationPage)
  } 
}
