import { Component } from '@angular/core';


//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';

import { HomePage } from '../home/home';
import { MallPage } from '../mall/mall';
import { My_ordersPage } from '../my_orders/my_orders';
import { Pay_or_sendPage } from '../pay_or_send/pay_or_send';
import { AccountPage } from '../account/account';
import { RechargePage } from '../recharge/recharge';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 // tab1Root = HomePage;
  //tab2Root = AboutPage;
 // tab3Root = ContactPage;

  tab1Root = HomePage;
  tab2Root = MallPage;
  tab3Root =RechargePage;
  tab4Root =  My_ordersPage ;
  tab5Root = AccountPage;
  constructor() {

  }
}
