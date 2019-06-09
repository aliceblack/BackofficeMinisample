import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EditorComponent } from './editor/editor.component';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EditorComponent
  ],
  imports: [
    NotifierModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
