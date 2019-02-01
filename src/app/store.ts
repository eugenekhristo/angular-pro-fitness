import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { User } from './auth/shared/services/auth/auth.service';

export type StoreKeys = 'user';

export interface State {
  [key: string]: any;
  user: User;
}

const initialState: State = {
  user: undefined
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
