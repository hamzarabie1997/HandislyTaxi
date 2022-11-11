import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ContactModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
