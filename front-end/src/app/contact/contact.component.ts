import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  myForm =new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  phone : new FormControl(''),
  address : new FormControl(''),
  subject : new FormControl(''),
  message : new FormControl(''),
  });

  

  constructor(public http: ContactService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  onSubmit() {}
    

  register() {
    let user = {
      u_name: this.myForm['name'].value,
      u_email: this.myForm['email'].value,
      u_phone: this.myForm['phone'].value,
      u_address: this.myForm['address'].value,
      u_subject: this.myForm['subject'].value,
      u_message: this.myForm['message'].value,
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
