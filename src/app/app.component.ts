import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BokalakAsmatuPage } from '../pages/bokalak-asmatu/bokalak-asmatu';
import { BokalaErrazaPage } from '../pages/bokala-erraza/bokala-erraza';
import { AboutPage } from '../pages/about/about';
import { ZenbakiErrazakPage } from '../pages/zenbaki-errazak/zenbaki-errazak';
import { ZenbakiZailakPage } from '../pages/zenbaki-zailak/zenbaki-zailak';
import { ZenbakiAsmatuPage } from '../pages/zenbaki-asmatu/zenbaki-asmatu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Bokalen Soinua Zaila', component: HomePage },
      { title: 'Bokalen Soinua Erraza', component: BokalaErrazaPage },
      { title: 'Bokalak Asmatu', component: BokalakAsmatuPage },
      { title: 'Zenbaki Errazak', component: ZenbakiErrazakPage },
      { title: 'Zenbaki Zailak', component: ZenbakiZailakPage },
      { title: 'Zenbakia Asmatu', component: ZenbakiAsmatuPage },
      { title: 'Kredituak', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
