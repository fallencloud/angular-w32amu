import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FullStackConfFormComponent } from './full-stack-conf-form/full-stack-conf-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FullStackConfFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
