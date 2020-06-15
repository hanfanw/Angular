/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 18:00:50
 * @LastEditTime: 2020-06-14 18:08:34
 */

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interface/postsAPI.interface";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = this.baseUrl + "/posts";
    return this.http.get<Post[]>(url);
  }
}
