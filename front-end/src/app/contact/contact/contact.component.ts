import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

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
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      address: new FormControl(null),
      subject: new FormControl(null),
      message: new FormControl(null),
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
