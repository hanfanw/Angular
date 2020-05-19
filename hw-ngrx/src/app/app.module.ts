/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 02:12:52
 * @LastEditTime: 2020-05-18 23:26:03
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PostReducer } from "./store/reducers/post.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { AddPostComponent } from "./add-post/add-post.component";
// import { PostListComponent } from "./post-list/post-list.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ post: PostReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
