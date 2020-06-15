/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 22:45:03
 * @LastEditTime: 2020-06-14 22:48:03
 */

import { Pipe, PipeTransform } from "@angular/core";

export const defaultValue = {
  limitNum: 30,
};

@Pipe({
  name: "limitChar",
})
export class LimitCharPipe implements PipeTransform {
  transform(
    value: string,
    limitNum: number = defaultValue.limitNum,
    ...args: any[]
  ): string {
    if (typeof value !== "string") {
      console.warn("limitCharPipe input is not a string");
      return value;
    }
    if (value.length > limitNum) {
      return value.slice(0, limitNum) + "...";
    }
    return value;
  }
}
