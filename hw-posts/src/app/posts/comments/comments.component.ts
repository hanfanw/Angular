/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 22:27:44
 * @LastEditTime: 2020-06-14 22:38:49
 */

import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "../interface/commentsAPI.interface";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: Comment[] = [];
  constructor() {}

  ngOnInit(): void {}
}
