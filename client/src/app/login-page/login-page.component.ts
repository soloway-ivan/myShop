import { Component,  } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})


export class LoginPageComponent {
  constructor(
    private dialogRef: MatDialogRef<LoginPageComponent>
  ) 
  {}

  element:string = ''
  element1:string = ''
  userName: string =''
  userName1: string =''

  close() {
    this.dialogRef.close()    
  }
}