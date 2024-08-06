import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyData } from 'src/assets/myData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public modifiedData: any;
  public assignee: any

  private data: MyData[] = [
    {
      id: 1,
      name: "Project Alpha",
      description: "This is a sample project",
      start_date: "2022-01-01",
      end_date: "2022-01-31"
    },
    {
      id: 2,
      name: "Project Bravo",
      description: "This is another sample project",
      start_date: "2022-02-01",
      end_date: "2022-02-28"
    },
    {
      id: 3,
      name: "Project Charlie",
      description: "This is yet another sample project",
      start_date: "2022-03-01",
      end_date: "2022-03-31"
    },
    {
      id: 4,
      name: "Project Delta",
      description: "This is a sample project with a longer description",
      start_date: "2022-04-01",
      end_date: "2022-04-30"
    },
    {
      id: 5,
      name: "Project Echo",
      description: "This is a sample project with a shorter description",
      start_date: "2022-05-01",
      end_date: "2022-05-31"
    }
  ];

  private dummyUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Alice Johnson' },
    { id: 5, name: 'Mike Brown' }
  ];

  private dummyTasks = [
    {
      id: 1,
      task_name: 'Task 1',
      description: 'This is task 1',
      start_date: '2022-01-01',
      end_date: '2022-01-31',
      assigned_to: 1
    },
    {
      id: 2,
      task_name: 'Task 2',
      description: 'This is task 2',
      start_date: '2022-02-01',
      end_date: '2022-02-28',
      assigned_to: 2
    },
    {
      id: 3,
      task_name: 'Task 3',
      description: 'This is task 3',
      start_date: '2022-03-01',
      end_date: '2022-03-31',
      assigned_to: 3
    }
  ];

  getData(): Observable<MyData[]> {
    return of(this.data);
  }

  updateData(data: MyData) {
    const index = this.data.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      this.data[index] = data;
    } else {
      console.log('Data not found');
    }
  }

  
  getUsers(): any[] {
    return this.dummyUsers;
  }

  updateTask(taskData: any): any {
    const index = this.dummyTasks.findIndex(task => task.id === taskData.id);
    if (index !== -1) {
      this.dummyTasks[index] = taskData;
    }
    return taskData;
  }

  assignTask(assignee: any): any {
    this.assignee =  assignee;
  }

  getAssignee() {
    return this.assignee;
  }
}
