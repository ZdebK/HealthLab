import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { MedicinesPage } from '../pages/medicines/medicines';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishesPage } from '../pages/dishes/dishes';
import { LiquidsPage } from '../pages/liquids/liquids';
import { MyExercisesPage } from '../pages/myexercises/myexercises';
import { LocalNotifications } from '@ionic-native/local-notifications/index';
import { YoutubePipe } from '../pipes/youtube/youtube';
import { FIREBASE_CONFIG } from "./app.firebase.config";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";


@NgModule({
  declarations: [
    MyApp,
   // HomePage,
    ListPage,
    MedicinesPage, 
    LiquidsPage,
    DishesPage, 
    MyExercisesPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    ListPage,
    MedicinesPage,
    LiquidsPage,
    DishesPage,
    MyExercisesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
