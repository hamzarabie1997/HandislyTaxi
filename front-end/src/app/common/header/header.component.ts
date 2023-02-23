import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from './../../signup/signup.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentSelection: string = 'Home';
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
  constructor(private router: Router, private dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100%';
    dialogConfig.width = '100%';
    dialogConfig.enterAnimationDuration = '0ms';
    dialogConfig.exitAnimationDuration = '0ms';
    this.dialog.open(SignupComponent, dialogConfig);
  }
  ngOnInit(): void {}

  navigateTo(index: number) {
    this.router.navigate([this.menuPaths[index]]);
    this.currentSelection = this.menuItems[index];
  }
}
