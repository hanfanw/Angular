/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-13 02:18:34
 * @LastEditTime: 2020-05-13 02:18:51
 */
export class Product {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, desc: string) {
    this.id = id;
    this.name = name;
    this.description = desc;
  }
}
