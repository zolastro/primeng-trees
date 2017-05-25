import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TreeService } from './tree-service'
import { AppComponent } from './app.component';
import { Tree, TreeNode, TreeModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
