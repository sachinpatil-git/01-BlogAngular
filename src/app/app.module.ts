import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeApp } from './employee-component/employee-component';
import { EmployeeList } from './employee-list-component/employee-list-component';
import { StudyJavaComponent } from './my-blog-component/my-blog-component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './my-blog-components.service/my-blog-component.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeApp,
    EmployeeList,
    StudyJavaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
