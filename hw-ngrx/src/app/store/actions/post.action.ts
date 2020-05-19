/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 02:19:59
 * @LastEditTime: 2020-05-18 02:35:37
 */
import { Action } from "@ngrx/store";
import { Post } from "../models/post.model";

export enum PostActionTypes {
  ADD_POST = "[POST] Add Post",
}

export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_POST;

  constructor(public payload: Post) {}
}

export type PostAction = AddPostAction;
