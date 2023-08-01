import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanbandy';
  opened: boolean = true;

  updateSideNavVisibility(status: boolean) {
    this.opened = status;
  }
}

