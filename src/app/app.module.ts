import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListService } from './game-list.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
