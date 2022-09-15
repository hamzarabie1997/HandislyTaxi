import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;

  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    });
  }
  get Form() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log('This button works!!!');
  }
}
