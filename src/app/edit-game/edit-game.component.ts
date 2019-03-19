import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';
import { GameItem } from '../Items/GameItem';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  searchId: number;
  lista : Array<GameItem>;
  constructor(private serviceGame: GameListService) { }

  ngOnInit() {

  }
  game: GameItem;


  searchGame() {
    this.game = this.serviceGame.getGame(this.searchId)
  }

  change(){
  
     this.serviceGame.editGame(this.game)
     
    
  }

  

}
