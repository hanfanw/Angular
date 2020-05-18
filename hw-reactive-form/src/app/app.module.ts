import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 01:24:29
 * @LastEditTime: 2020-05-18 01:53:04
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddUserComponent } from "./add-user/add-user.component";

@NgModule({
  declarations: [AppComponent, AddUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
