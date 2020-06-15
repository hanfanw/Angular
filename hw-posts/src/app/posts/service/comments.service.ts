/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 22:23:08
 * @LastEditTime: 2020-06-14 22:25:29
 */

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCommentsByPostId(id): Observable<Comment[]> {
    const url = this.baseUrl + "/comments?postId=" + id;
    return this.http.get<Comment[]>(url);
  }
}
