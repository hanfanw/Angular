/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-13 22:58:17
 * @LastEditTime: 2020-06-13 23:43:11
 */

import { PostsComponent } from "./posts/posts.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
