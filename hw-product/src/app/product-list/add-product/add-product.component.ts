import { Product } from "./../product";
/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-13 01:56:09
 * @LastEditTime: 2020-05-13 02:47:43
 */
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  id: number;
  name: string;
  description: string;

  constructor() {}
  @Input() pList: Product[];
  @Output() event = new EventEmitter<Product[]>();
  ngOnInit(): void {
    this.id = 1;
    this.name = "";
    this.description = "This is the description for the product";
  }

  addName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  addDescription(event: Event) {
    this.description = (<HTMLInputElement>event.target).value;
  }
  addProduct() {
    this.pList.push(new Product(++this.id, this.name, this.description));
    // sendToParent
    this.event.emit(this.pList);
    this.name = "";
    this.description = "This is the description for the product";
  }
}
