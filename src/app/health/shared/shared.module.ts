import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// services
import { MealsService } from './services/meals/meals.service';
// components
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    };
  }
}
