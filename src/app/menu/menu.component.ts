import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItems } from '../Items/MenuItems';
import { HeaderService } from '../header.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItems[] = [
    new MenuItems(1, 'Home', true , '/home'),
    new MenuItems(2, 'Lista',false, '/game-list'),
    new MenuItems(3, 'Modifica',false ,'/edit')
  ]
  constructor(private headerService: HeaderService
  ) { }


  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
  }
  showSection(id: number) {
    for (const item of this.menuItems) {
      item.checked = item.id === id;
    }
    this.showSectionEvent.emit(id);
  }


}
