import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent, NavbarComponent } from './layouts';
import { ErrorComponent } from './layouts';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MainModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
