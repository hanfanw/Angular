/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-11 19:31:29
 * @LastEditTime: 2020-05-13 01:48:15
 */
export class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, fn: string, ln: string) {
    this.id = id;
    this.firstName = fn;
    this.lastName = ln;
  }
}
