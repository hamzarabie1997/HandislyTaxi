import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100%';
    dialogConfig.width = '100%';
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    this.dialog.open(SignupComponent, dialogConfig);
  }
  openEmailDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100%';
    dialogConfig.width = '100%';
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    this.dialog.open(LoginFormComponent, dialogConfig);
  }
  ngOnInit(): void {}
}
