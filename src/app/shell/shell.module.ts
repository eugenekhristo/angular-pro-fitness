import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent]
})
export class ShellModule { }
