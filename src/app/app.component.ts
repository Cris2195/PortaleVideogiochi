import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PortaleVideogiochi';
  idSectionToShow: number = 1
  changeSection(id: number) {
    this.idSectionToShow = id;
  }
}
