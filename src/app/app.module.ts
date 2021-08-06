import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UsersService } from './services/users.service';
import { UsersTableComponent } from './users-table/users-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,MatTableModule,MatPaginatorModule,MatInputModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
