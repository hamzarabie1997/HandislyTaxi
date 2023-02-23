import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupFormService } from './signup-form.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(8),
    ]),
  });

  signup() {
    let user = {
      u_email: this.signupForm.value.email,
      u_password: this.signupForm.value.password,
    };
    if (this.signupForm.valid) {
      this.http.signUp('http://localhost:3000/backend', user).subscribe({
        next: (data) => {
          let res: any = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  constructor(private dialog: MatDialog, public http: SignupFormService) {}
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
  ngOnInit(): void {}
}
