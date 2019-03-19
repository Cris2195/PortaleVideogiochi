import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
   nome : string;
  ngOnInit() {
    if(sessionStorage.length>0)
    this.nome = sessionStorage.getItem('user');
    
  }

}
