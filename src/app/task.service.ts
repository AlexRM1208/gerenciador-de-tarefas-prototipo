import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [];

  constructor() {}

  addTask(task) {
    this.tasks.push(Task);
  }

  getTasks() {
    return this.tasks;
  }

  filterTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
    
  }

}
