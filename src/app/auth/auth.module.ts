import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// custom modules
import { SharedModule } from './shared/shared.module';


const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyC57HyJr55TrD0bu7s-7BwtuCSTUCkcDGA',
  authDomain: 'fitness-app-b79bf.firebaseapp.com',
  databaseURL: 'https://fitness-app-b79bf.firebaseio.com',
  projectId: 'fitness-app-b79bf',
  storageBucket: 'fitness-app-b79bf.appspot.com',
  messagingSenderId: '661771194820'
};

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
