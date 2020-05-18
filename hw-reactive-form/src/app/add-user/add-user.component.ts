import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-18 01:31:20
 * @LastEditTime: 2020-05-18 01:59:35
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
  // phoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;

  profileForm = this.fb.group({
    id: 0,
    name: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.pattern(this.emailReg)],
    address: this.fb.group({
      street: [""],
      suit: [""],
      city: [""],
      zipcode: [""],
      geo: this.fb.group({
        lat: [""],
        lng: [""],
      }),
    }),
    phone: ["", Validators.required],
    website: [""],
    company: this.fb.group({
      name: [""],
      catchPhrase: [""],
      bs: [""],
    }),
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {}

  print() {
    console.log(this.profileForm);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.http
        .post(
          "https://jsonplaceholder.typicode.com/users",
          this.profileForm.value
        )
        .subscribe((response) => {
          console.log("repsonse: ", response);
        });
    } else {
      alert("The form is invalid!");
    }
  }
}
