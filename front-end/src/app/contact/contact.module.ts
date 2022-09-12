import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  exports: [ContactComponent],
})
export class ContactModule { }
