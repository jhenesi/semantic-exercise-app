import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { mainRoutes } from './main.route';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UnsecuredComponent } from './unsecured/unsecured.component';
import { DynamicFormsModule } from '../dynamic-forms';

@NgModule({
  declarations: [LoginComponent, HomeComponent, UnsecuredComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    DynamicFormsModule
  ]
})
export class MainModule { }
