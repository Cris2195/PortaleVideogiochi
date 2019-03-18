import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListService } from './game-list.service';
import { HomeComponent } from './home/home.component';
import { EditGameComponent } from './edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameListComponent,
    HomeComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
