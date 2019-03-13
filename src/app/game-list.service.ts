import { Injectable } from '@angular/core';
import { GameItem } from './Items/GameItem';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
    lista : Array<GameItem>  = [
      new GameItem("World Of Warcraft", 1)
    ]
  constructor() {
    
   }


   addGame (game:GameItem): void{
     this.lista.push(game);
   }

   getLista():Array<GameItem>{
     return this.lista;
   }
   getGame(index):GameItem{
     return this.lista[index];
   }
   setGame(index,game:GameItem):void{
     this.lista[index] = game;
   }
}
