import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  @Input()
  title: string = '';

  processInput(): void {
    this.title = this.title.toUpperCase();
  }

  ngOnInit(): void {
    this.processInput();
  }
}
