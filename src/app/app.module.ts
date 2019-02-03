import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// feature modules
import { AuthModule } from './auth/auth.module';
import { ShellModule } from './shell/shell.module';
import { HealthModule } from './health/health.module';

// containers
import { AppComponent } from './app.component';

// components

// routes
import { AppRoutingModule } from './app-routing.module';

// app state
import { Store } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ShellModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
