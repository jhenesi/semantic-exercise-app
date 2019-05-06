import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../core/data/in-memory-data.service';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { adminRoutes } from './admin.route';
import { SecuredComponent } from './secured/secured.component';

@NgModule({
  declarations: [SecuredComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forChild(adminRoutes),
    MatCardModule,
    MatTableModule
  ]
})
export class AdminModule { }
