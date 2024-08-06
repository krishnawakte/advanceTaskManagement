import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-assignment',
  templateUrl: './task-assignment.component.html',
  styleUrls: ['./task-assignment.component.scss']
})
export class TaskAssignmentComponent implements OnInit {
  public taskAssignmentForm!: FormGroup;
  public retrievedData: any;
  public users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _sharedService: SharedService,
    private _apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formCreation();
    this.retrievedData = this._sharedService.getData();    
    this.getUsers();
    this.patchValues();
  }

  formCreation(): void {
    this.taskAssignmentForm = this.fb.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      assigned_to: ['',[Validators.required]]
    });
  }

  getUsers(): void {
    this.users = this._apiService.getUsers();
  }

  patchValues(): void {
    this.taskAssignmentForm.patchValue({
      name: this.retrievedData?.name,
    });
  } 

  onSubmit(): void {
    const updatedData = this.taskAssignmentForm.value.assigned_to ;
    this._apiService.assignTask(updatedData);
    this.router.navigate(['/project-details'])
  }
}