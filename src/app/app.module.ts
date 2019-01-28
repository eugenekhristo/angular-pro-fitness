import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './app.component';

// components

// routes

// app state
import { Store } from './store';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
