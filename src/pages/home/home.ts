import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SearchPage} from '../search/search';
import {Pay_or_sendPage} from '../pay_or_send/pay_or_send';
import {AddmoneyPage} from '../addmoney/addmoney';
import {GetpaymentPage} from '../getpayment/getpayment';
import {TransactionPage} from '../transaction/transaction';
import {PhonerechargePage} from '../phonerecharge/phonerecharge';
import {RechargePage} from '../recharge/recharge';

import {Book_ticketPage} from '../book_ticket/book_ticket';
import {Recharge_bill_payment_morePage} from '../recharge_bill_payment_more/recharge_bill_payment_more';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
///
  search(){
        this.navCtrl.push(SearchPage)
  } 
  pay_or_send(){
        this.navCtrl.push(Pay_or_sendPage)
  } 
  addmoney(){
        this.navCtrl.push(AddmoneyPage)
  } 
  getpayment(){
        this.navCtrl.push(GetpaymentPage)
  } 
  transaction(){
        this.navCtrl.push(TransactionPage)
  } 
  //Bill Payments and Recharge
  phonerecharge(){
	    console.log("Systems pppp");
        this.navCtrl.push(RechargePage)
  }  
  book_ticket(){
        this.navCtrl.push(Book_ticketPage)
  } 
  more_rechargebillpayment(){
        this.navCtrl.push(Recharge_bill_payment_morePage)
  }
  //Financial Services
  more_financial_services(){
	  
  }
}
