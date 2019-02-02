import { Injectable } from '@angular/core';
// third-party components
import { AngularFireAuth } from 'angularfire2/auth';
// Store
import { Store } from 'store';
// RxJs
import { tap } from 'rxjs/operators';

export interface User {
  email: string;
  uid: string;
  isAuth: boolean;
}

@Injectable()
export class AuthService {
  auth$ = this.af.authState.pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
      } else {
        const user: User = {
          email: next.email,
          uid: next.uid,
          isAuth: true
        };
        this.store.set('user', user);
      }
    })
  );

  constructor(private af: AngularFireAuth, private store: Store) {}

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<void> {
    return this.af.auth.signOut();
  }
}
