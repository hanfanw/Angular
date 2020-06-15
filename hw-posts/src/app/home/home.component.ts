/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-13 23:04:10
 * @LastEditTime: 2020-06-14 16:39:20
 */

import { ModalService } from "./../shared/services/modal.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  showModal() {
    console.log("click");
    this.modalService.showModal("hello-modal");
  }
}
