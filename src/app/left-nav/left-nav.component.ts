import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  @Output() closeLeftNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  updateParentLeftNavStatus() {
    this.closeLeftNav.emit(false);
  }
}
