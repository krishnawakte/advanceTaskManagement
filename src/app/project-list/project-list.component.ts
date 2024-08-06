import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{

  //Variable Declaration
  public updatedData: any
  public data: any;
  public showForm = false;
  public newproject = {id: '', name: '', description: '', start_date: '', end_date: '' };

  constructor(
    private router: Router,
    private _sharedService: SharedService,
    private _apiService: ApiService,
    private cdRef: ChangeDetectorRef
  ){

  }
  ngOnInit() {
    this.init();    
  }

  init(){
    this._apiService.getData().subscribe(data => {
      this.data = data;
    });
    this.cdRef.detectChanges();
  }

  createproject() {
    this.newproject.id = this.data.length + 1;
    this.data.push(this.newproject);
    this.newproject = {id:'', name: '', description: '', start_date: '', end_date: '' };
    this.showForm = false;
  }

  selectproject(project:any){
    this._sharedService.setData(project);
    this.router.navigate(['/project-details'])
  }
  deleteproject(index: any) {
    this.data.splice(index, 1);
  }

}
