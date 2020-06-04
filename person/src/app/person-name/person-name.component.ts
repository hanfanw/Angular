import { Person } from "./person";
/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-11 18:43:35
 * @LastEditTime: 2020-06-02 00:46:48
 */
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-person-name",
  templateUrl: "./person-name.component.html",
  styleUrls: ["./person-name.component.css"],
})
export class PersonNameComponent implements OnInit {
  index: number = 0;
  personId: number = this.index;
  personFirstName: string = "";
  personLastName: string = "";
  personList: Person[] = [];
  constructor() {}

  ngOnInit(): void {}

  updateFirstName(event: Event) {
    this.personFirstName = (<HTMLInputElement>event.target).value;
  }

  updateLastName(event: Event) {
    this.personLastName = (<HTMLInputElement>event.target).value;
  }

  addPerson() {
    const person = new Person(
      ++this.personId,
      this.personFirstName,
      this.personLastName
    );
    this.personList.push(person);
    this.personFirstName = "";
    this.personLastName = "";
  }
}
