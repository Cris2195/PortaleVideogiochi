import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameListComponent } from './game-list/game-list.component';
import { LoginComponent } from './login/login.component';
import { componentFactoryName } from '@angular/compiler';
import { AuthGuard } from './authGuard';



const routes: Routes = [
    {path:'login', component:LoginComponent, canActivate:[AuthGuard]},

    {path: 'portale', canActivateChild:[AuthGuard], children:[
        {
            path: 'home', component: HomeComponent ,
        },
        { path: 'edit', component: EditGameComponent },
        { path: 'game-list', component: GameListComponent }    
        
    ]},

   



    {path:'', redirectTo:'/login', pathMatch:"full"}
   

]
    




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
