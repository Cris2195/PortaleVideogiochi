import { Injectable } from '@angular/core';
import { GameItem } from './Items/GameItem';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
    lista : Array<GameItem>  = [
      new GameItem("World Of Warcraft", 1)
      new GameItem("Final Fantasy X",2);
    ]
  constructor() {
    
   }


   addGame (game:GameItem): void{
     this.lista.push(game);
   }

   getLista():Array<GameItem>{
     return this.lista;
   }
   getGame(id):GameItem{
     return this.lista.find(item =>{
       return item.id === id;
     });
   }
   setGame(id,game:GameItem):void{
    

      
       

       
    
   }
}
