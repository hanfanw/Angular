/*
 * @Author: Hanfan Wang
 * @Date: 2020-06-14 00:35:03
 * @LastEditTime: 2020-06-14 00:49:12
 */

import { Directive, OnInit, OnDestroy, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appChangeColorInterval]",
})
export class ChangeColorIntervalDirective implements OnInit, OnDestroy {
  private _timeAction;
  @Input()
  intervalTime = 1;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log("init");
    this._timeAction = setInterval(() => {
      this.elementRef.nativeElement.style.color = this.getRandomColor();
    }, this.intervalTime * 1000);
  }

  getRandomColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }
  ngOnDestroy(): void {
    clearInterval(this._timeAction);
  }
}
