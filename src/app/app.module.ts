import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TreeService } from './tree-service';
import { AppComponent } from './app.component';
import { Tree, TreeNode, TreeModule } from 'primeng/primeng';
import {TreeDragDropService} from 'primeng/primeng';
import {SynchService} from './synch.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDdufjVVmsU7IYoTWVItp1VsiElbIYPe_8',
  authDomain: 'tree-example.firebaseapp.com',
  databaseURL: 'https://tree-example.firebaseio.com',
  projectId: 'tree-example',
  storageBucket: 'tree-example.appspot.com',
  messagingSenderId: '703677732131'
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [TreeService, TreeDragDropService, SynchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
