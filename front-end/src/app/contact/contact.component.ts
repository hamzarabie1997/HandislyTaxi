import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;

  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  address = new FormControl('');
  subject = new FormControl('');
  message = new FormControl('');

  

  constructor(public http: ContactService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  onSubmit() {}
    

  register() {
    let user = {
      u_name: this.name,
      u_email: this.email,
      u_phone: this.phone,
      u_address: this.address,
      u_subject: this.subject,
      u_message: this.message,
    };

    this.http.sendEmail('http://localhost:3000/contact', user).subscribe(
      (data) => {
        let res: any = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
