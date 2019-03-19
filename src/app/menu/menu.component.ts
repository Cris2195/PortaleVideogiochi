import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItems } from '../Items/MenuItems';
import { HeaderService } from '../header.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItems[] = [
    new MenuItems(1, 'Home', true , '/portale/home'),
    new MenuItems(2, 'Lista',false, '/portale/game-list'),
    new MenuItems(3, 'Modifica',false ,'/portale/edit'),
    
  ]
  constructor(private headerService: HeaderService , private router:Router
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
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);

  }


}
