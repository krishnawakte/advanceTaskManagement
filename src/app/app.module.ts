import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ButtonComponent } from './button/button.component';
import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ButtonComponent,
    TaskAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
