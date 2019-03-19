import { Injectable } from '@angular/core';
import { GameItem } from './Items/GameItem';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  lista: Array<GameItem> = [
    new GameItem("World Of Warcraft", 1,"Best game evah"),
    new GameItem("Final Fantasy X", 2),
    new GameItem("Fifa 2019", 3)]


  constructor() {

  }


  addGame(game: GameItem): void {
    this.lista.push(game);
  }

  getLista(): Array<GameItem> {
    return this.lista;
  }
  getGame(id): GameItem {
    return this.lista.find(item =>{
      return item.id === id    })
  }

  editGame(game: GameItem) {
    this.lista = this.lista.map(item => {
      if (item.id === game.id) {
        return game;
      } else {
        return item;
      }
    });
  }

  
  

  
}
