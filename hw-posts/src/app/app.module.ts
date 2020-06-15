/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-13 22:58:17
 * @LastEditTime: 2020-06-14 22:37:49
 */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { HeaderComponent } from "./header/header.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ChangeColorIntervalDirective } from "./shared/directive/change-color-interval.directive";
import { ModalComponent } from "./shared/components/modal/modal.component";
import { HttpClientModule } from "@angular/common/http";
import { CommentsComponent } from "./posts/comments/comments.component";
import { LimitCharPipe } from './shared/pipes/limit-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ChangeColorIntervalDirective,
    ModalComponent,
    CommentsComponent,
    LimitCharPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
