import { SignupComponent } from './../../signup/signup.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
 
}

