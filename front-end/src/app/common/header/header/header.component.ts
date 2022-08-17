import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() currentSelection : string;
  menuItems = [
    'Home',
    'Our Services',
    'Contact Us',
    'Fleet',
    'Corporate Accounts',
    'About',
    'FAQ',
    'Book Online',
    'Plans and Pricing'
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
