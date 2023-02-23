import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupFormComponent } from '../signup-form/signup-form.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100%';
    dialogConfig.width = '100%';
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    this.dialog.open(LoginComponent, dialogConfig);
  }
  openEmailDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100%';
    dialogConfig.width = '100%';
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    this.dialog.open(SignupFormComponent, dialogConfig);
  }
  ngOnInit(): void {}
}
