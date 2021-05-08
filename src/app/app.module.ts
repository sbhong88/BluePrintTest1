import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeInputComponent } from './components/employee/employee-input/employee-input.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CustomDropdownComponent } from './components/employee/custom-dropdown/custom-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeInputComponent,
    EmployeeListComponent,
    CustomDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
