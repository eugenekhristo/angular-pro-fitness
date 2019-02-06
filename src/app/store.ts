import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

// interfaces
import { User } from './auth/shared/services/auth/auth.service';
import { Meal } from './health/shared/services/meals/meals.service';

export type StoreKeys = 'user' | 'meals';

export interface State {
  [key: string]: any;
  user: User;
  meals: Meal;
}

const initialState: State = {
  user: undefined,
  meals: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: StoreKeys): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: StoreKeys, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
