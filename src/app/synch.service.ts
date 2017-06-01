import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class SynchService {
  user: Observable<any>;
  items: FirebaseListObservable<any[]>;
  root: FirebaseObjectObservable<any[]>;
  msgVal = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/data');
    this.root = af.object('/data');
    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  update(data: any) {
    console.log(JSON.stringify(data))
    this.root.update(JSON.parse(JSON.stringify(data))).then(items => console.log(items));
  }

  getItems() {
    return this.items;
  }

}
