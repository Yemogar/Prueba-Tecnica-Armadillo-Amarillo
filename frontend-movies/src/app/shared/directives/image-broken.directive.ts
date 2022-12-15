import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImageBroken]'
})
export class ImageBrokenDirective {
  constructor(private el: ElementRef) {}

  @HostListener('error')
  private onError() {
    this.el.nativeElement.src = '../assets/imgs/No-image-found.jpeg';
  }
}
