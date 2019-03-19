import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameListComponent } from './game-list/game-list.component';


const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    { path: 'edit', component: EditGameComponent },
    { path: 'game-list', component: GameListComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },



];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
