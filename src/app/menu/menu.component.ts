import { Component, OnInit, Output } from '@angular/core';
import { MenuItems } from '../Items/MenuItems';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItems[] = [
    new MenuItems("1", 'Home', true),
    new MenuItems("2", 'Lista'),
    new MenuItems("3", 'Dettaglio'),
    new MenuItems("4", 'Modifica')
  ];
  constructor(private headerService : HeaderService
  ) { }



  ngOnInit() {
  }
  selectSection(id:string){

    this.menuItems.forEach(item => {
      if(id == item.id){
        item.checked = true;
      }else{
        item.checked = false;
      }
    });

    this.headerService.setSelection(id);
  }


}
