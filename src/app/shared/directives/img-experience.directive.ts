import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

import { Worker } from '@shared/models/worker.model'

@Directive({
  selector: '[appImgExperience]'
})
export class ImgExperienceDirective {
  @Input() set data(worker: Worker) {

    this.setImg(worker.yearsWorked > 5 ? this.proUrl : this.beginner)

  }


  proUrl = 'http://4.bp.blogspot.com/-p8FB_ly9JWA/TZOzY_h2rGI/AAAAAAAAACc/0WqDWj80bUM/s1600/funny-baby-wallpapers-collection65.jpg_thumb.jpg'
  beginner = 'data:image/jpeg;base64,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'

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }


  setImg(imgUrl: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', (imgUrl))
  }

}
