import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class SynchService {
  user: Observable<any>;
  items: FirebaseObjectObservable<any[]>;
  msgVal = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.object('/data');
    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  update(data: any) {
    this.items.update(JSON.parse(JSON.stringify(data, this.replacer))).then(items => console.log(items));
  }

  getItems() {
    return this.items;
  }

  replacer(key, value) {
    if (key === 'parent') {
      return undefined;
    }
    return value;
  }

}
