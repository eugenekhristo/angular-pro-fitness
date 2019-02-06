import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

// store
import { Store } from 'store';

// services
import { AuthService } from 'src/app/auth/shared/services/auth/auth.service';

// rxjs
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  meals$: Observable<Meal[]> = this.db
    .list<Meal>(`meals/${this.uid}`)
    .valueChanges()
    .pipe(tap(meals => this.store.set('meals', meals)));

  constructor(
    private db: AngularFireDatabase,
    private store: Store,
    private authService: AuthService
  ) {}

  private get uid() {
    return this.authService.currentUser.uid;
  }
}
