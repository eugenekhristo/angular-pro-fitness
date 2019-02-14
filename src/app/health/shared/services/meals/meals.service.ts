import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

// store
import { Store } from 'store';

// services
import { AuthService } from 'src/app/auth/shared/services/auth/auth.service';

// rxjs
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  // Observable<Meal[]>
  meals$ = this.db
    .list<Meal>(`meals/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(mealsBlob => {
        return mealsBlob.map(item => {
          const key = item.key;
          const payload = item.payload.val();
          return {key, ...payload};
        });
      }),
      tap(meals => this.store.set('meals', meals))
    );

  constructor(
    private db: AngularFireDatabase,
    private store: Store,
    private authService: AuthService
  ) {}

  private get uid() {
    return this.authService.currentUser.uid;
  }

  addMeal(meal: Meal) {
    this.db.list(`meals/${this.uid}`).push(meal);
  }

  removeMeal(key: string) {
    this.db.list(`meals/${this.uid}`).remove(key);
  }
}
