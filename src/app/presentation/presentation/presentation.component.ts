import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  @Input() displayShortcuts = true;
  @Input() activeSlideId = 0;
  @Input() public width = 1280;
  @Input() public height = 720;
  @Input() public zoom = 1;


  private generatedSlideId = 0;

  generateSlideId() {
    return this.generatedSlideId++;
  }

  get totalSlides() {
    return this.generatedSlideId;
  }

  nextSlide() {
    if (this.activeSlideId + 1 < this.generatedSlideId) {
      this.activeSlideId++;
    }
  }

  previousSlide() {
    if (this.activeSlideId > 0) {
      this.activeSlideId--;
    }
  }
}
