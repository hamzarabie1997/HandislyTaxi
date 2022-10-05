import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(8),
    ]),
    address: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  constructor(public http: ContactService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  onSubmit() {}

  register() {
    let user = {
      u_name: this.myForm.value.name,
      u_email: this.myForm.value.email,
      u_phone: this.myForm.value.phone,
      u_address: this.myForm.value.address,
      u_subject: this.myForm.value.subject,
      u_message: this.myForm.value.message,
    };
    if (this.myForm.valid) {
      
      this.http.sendEmail('http://localhost:3000/backend', user).subscribe({
        next: (data) => {
          let res: any = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  phoneHandler(event) {
    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
}
