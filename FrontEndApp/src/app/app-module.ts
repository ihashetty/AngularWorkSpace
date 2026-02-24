import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { Chai } from './chai/chai';
import { MasaChai } from './masa-chai/masa-chai';
import { ElaichiChai } from './elaichi-chai/elaichi-chai';
import { GingerChai } from './ginger-chai/ginger-chai';
import { PlainChai } from './plain-chai/plain-chai';
import { FormsModule } from '@angular/forms';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';
import { Catalogue } from './catalogue/catalogue';
import { AddBook } from './add-book/add-book';

@NgModule({
  declarations: [
    App,
    Red,
    Yellow,
    Chai,
    MasaChai,
    ElaichiChai,
    GingerChai,
    PlainChai,
    Blue,
    Green,
    Orange,
    Catalogue,
    AddBook
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
