import { ServicesModule } from './services/services.module';
import { HeaderModule } from './common/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ContactModule } from './contact/contact.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HeaderModule,
    ServicesModule,
    MatButtonModule,
    IvyCarouselModule,
    ContactModule,
    HttpClientModule,
    HomeModule,
    DetailsModule,
    SignupModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
