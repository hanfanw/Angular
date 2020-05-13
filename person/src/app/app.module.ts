/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-11 18:32:12
 * @LastEditTime: 2020-05-11 18:42:34
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PersonNameComponent } from './person-name/person-name.component';

@NgModule({
  declarations: [AppComponent, PersonNameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
