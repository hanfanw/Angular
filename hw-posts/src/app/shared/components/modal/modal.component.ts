/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 16:28:45
 * @LastEditTime: 2020-06-14 16:36:30
 */

import { ElementRef } from "@angular/core";
import { ModalService } from "./../../services/modal.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  hideModal(e) {
    if (e.target.className === "backdrop") {
      this.elementRef.nativeElement.style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }
}
