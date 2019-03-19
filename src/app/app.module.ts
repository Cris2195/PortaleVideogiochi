import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListService } from './game-list.service';
import { HomeComponent } from './home/home.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameListComponent,
    HomeComponent,
    EditGameComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GameListService,  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
