import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  // {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
