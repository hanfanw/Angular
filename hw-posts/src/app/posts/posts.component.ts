import { ModalService } from "./../shared/services/modal.service";
import { CommentsService } from "./service/comments.service";
/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-13 23:05:46
 * @LastEditTime: 2020-06-14 22:40:55
 */

import { PostsService } from "./service/posts.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "./interface/postsAPI.interface";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  getPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  clearPosts() {
    this.posts = [];
  }

  showComments(id) {
    this.commentsService.getCommentsByPostId(id).subscribe((data) => {
      this.comments = data;
      this.modalService.showModal("comments-modal");
    });
  }
}
