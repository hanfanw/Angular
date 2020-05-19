/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 02:36:00
 * @LastEditTime: 2020-05-18 02:36:01
 */
import { Post } from "./post.model";

export interface AppState {
  readonly post: Array<Post>;
}
