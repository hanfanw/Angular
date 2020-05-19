// import { Component } from '@angular/core';
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FormBuilder } from "@angular/forms";

import { Post } from "../app/store/models/post.model";
import { AppState } from "../app/store/models/app-state.model";
import { AddPostAction } from "../app/store/actions/post.action";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  posts$: Observable<Array<Post>>;
  newPost: Post = { userId: 0, title: "", body: "" };

  // postForm = this.fb.group({
  //   userId: 0,
  //   title: "",
  //   body: "",
  // });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select((store) => store.post);
    // setTimeout(() => this.addItem(), 2000);
    console.log(this.posts$);
  }

  addItem() {
    this.store.dispatch(new AddPostAction(this.newPost));
    this.newPost = { userId: 0, title: "", body: "" };
  }
}
