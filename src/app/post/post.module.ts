import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditListComponent } from './edit-list/edit-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    EditListComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    PostRoutingModule,
    ReactiveFormsModule,
   HttpClientModule
  ],
  exports: [
    ItemComponent,
    ListComponent,
    EditListComponent,
    HeaderComponent
  ],
  providers: [HttpClientModule, HttpClient]
})
export class PostModule { }
