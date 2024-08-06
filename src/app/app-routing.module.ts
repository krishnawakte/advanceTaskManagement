import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';

const routes: Routes = [
  { path: '', redirectTo: '/project-list', pathMatch: 'full' },

  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'task-assignment', component: TaskAssignmentComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
