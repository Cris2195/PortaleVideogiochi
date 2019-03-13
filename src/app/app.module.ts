import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListService } from './game-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    MenuComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
