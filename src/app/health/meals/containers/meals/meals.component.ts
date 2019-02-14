import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MealsService,
  Meal
} from 'src/app/health/shared/services/meals/meals.service';

// rxjs
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// store
import { Store } from 'store';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  meals$: Observable<Meal[]>;

  constructor(private mealsService: MealsService, private store: Store) {}

  ngOnInit() {
    this.mealsService.meals$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.meals$ = this.store.select<Meal[]>('meals');
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onRemoveMeal(meal: Meal): void {
    this.mealsService.removeMeal(meal.key);
  }
}
