import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopNavComponent }  from './topnav.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopNavComponent ],
  bootstrap:    [ AppComponent, TopNavComponent ]
})
export class AppModule { }
