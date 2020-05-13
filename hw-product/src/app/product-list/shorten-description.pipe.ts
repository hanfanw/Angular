/*
 * @Author: Hanfan Wang
 * @Date: 2020-05-13 02:49:28
 * @LastEditTime: 2020-05-13 02:50:02
 */
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortenDescription",
})
export class ShortenDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.substring(0, 20) + "...";
  }
}
