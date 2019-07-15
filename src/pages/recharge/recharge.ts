import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html'
})
export class RechargePage {
  order_tab: string = "all";
  constructor(public navCtrl: NavController) {

  }

}
