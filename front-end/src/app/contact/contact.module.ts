import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule,MatFormFieldModule],
  exports: [ContactComponent],
})
export class ContactModule { }
