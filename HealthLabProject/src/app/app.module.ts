import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { MedicinesPage } from '../pages/medicines/medicines';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishesPage } from '../pages/dishes/dishes';
import { LiquidsPage } from '../pages/liquids/liquids';
import { MyExercisesPage } from '../pages/myexercises/myexercises';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { YoutubePipe } from '../pipes/youtube/youtube';

import { FIREBASE_CONFIG } from "./app.firebase.config";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ProvidersDrugsProvider } from '../providers/providers-drugs/providers-drugs';

import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MedicinesPage,
    LiquidsPage,
    DishesPage,
    MyExercisesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    ProvidersDrugsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
