/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-13 01:55:28
 * @LastEditTime: 2020-05-13 02:47:30
 */
import { Component, OnInit } from "@angular/core";
import { Product } from "./../product-list/product";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor() {}

  ngOnInit(): void {
    this.productList = [
      new Product(1, "Car", "This is the description for the product"),
    ];
  }

  setDataFromChild(data: Product[]) {
    this.productList = data;
  }
}
