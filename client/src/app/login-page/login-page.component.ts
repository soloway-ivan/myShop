import { Component,  } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
  element:string = ''
  element1:string = ''
  userName: string =''
  userName1: string =''

  handler() {
    console.log(this.userName);
    console.log(this.userName1);
    
  }

}