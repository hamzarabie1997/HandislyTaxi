import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      address: new FormControl(null),
      subject: new FormControl(null),
      message: new FormControl(null),
    });
  }
  onSubmit() {
    console.log('This button works!!!');
  }
}
