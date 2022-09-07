import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentSelection: string;
  menuItems = [
    'Home',
    'Our Services',
    'Contact Us',
    'Fleet',
    'Corporate Accounts',
    'About',
    'FAQ',
    'Book Online',
    'Plans and Pricing',
  ];
  menuPaths = ['', 'services', 'contact'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(index: string) {
    this.router.navigate([this.menuPaths[index]]);
    this.currentSelection = this.menuItems[index];
  }
}
