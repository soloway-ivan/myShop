import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(
    public dialog: MatDialog
  ) {}

  openFrom(): void {
    const dialogRef = this.dialog.open(LoginPageComponent, {
      height: '400px',
      width: '400px',
      panelClass: 'custom-modalbox'
    })
  }

  
}
