/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 02:20:17
 * @LastEditTime: 2020-05-18 23:50:08
 */
import { PostActionTypes, PostAction } from "../actions/post.action";
import { Post } from "../models/post.model";

const initialState: Array<Post> = [
  {
    userId: 0,
    title: "Dr.",
    body: "Pepper",
  },
];

export function PostReducer(
  state: Array<Post> = initialState,
  action: PostAction
) {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
