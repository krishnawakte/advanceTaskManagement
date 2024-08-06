import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{
  
  public projectForm!:FormGroup;
  public retrievedData: any
  public assignee:any = ''

  constructor(
    private fb: FormBuilder,
    private _sharedService: SharedService,
    private _apiService: ApiService,
    private router: Router,
  ){}


  ngOnInit(){
    this.getAssignee()
    this.formCreation()
    this.retrievedData = this._sharedService.getData();
    this.patchValues();
  }

  getAssignee(): void {
    this.assignee = this._apiService.getAssignee();    
  }


  formCreation(){
    this.projectForm = this.fb.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      start_date: ['',[Validators.required]], 
      end_date: ['',[Validators.required]],
      assigned_to: ['',[Validators.required]]
    });
  }

patchValues(){
  this.projectForm.patchValue({
    name: this.retrievedData?.name,
    description: this.retrievedData?.description,
    start_date: this.retrievedData?.start_date,
    end_date: this.retrievedData?.end_date,
  })
  }

  onSubmit() {
    const updatedData = this.projectForm.value;
    updatedData.id = this.retrievedData.id;
    this._apiService.updateData(updatedData);
    this.router.navigate(['/project-list']);
  }

  assignTask(){
    const updatedData = this.projectForm.value;
    this._sharedService.setData(updatedData);    
    this.router.navigate(['/task-assignment']);

  }
}
