import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployerInterceptor } from './interceptors/employer.interceptor';
import { EmployersManagmentComponent } from './modules/emloyers/employers-managment/employers-managment.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { EmployersTableComponent } from './modules/emloyers/employers-managment/employers-table/employers-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    EmployersManagmentComponent,
    EmployersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: EmployerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
