import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  nome: string;
  pass: string;
  constructor(private router :Router ) { }

  ngOnInit() {
  }




  goToOtherPage(){
    if(this.nome.length >= 2 && this.pass.length >=7){
      this.router.navigate(['/home']);
      sessionStorage.setItem('user', this.nome);
    }

  }

}
