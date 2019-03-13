import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';
import { GameItem } from '../Items/GameItem';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private gameService: GameListService ) { }
lista : Array<GameItem>;
  ngOnInit() {
    this.lista = this.gameService.getLista();
  }

}
