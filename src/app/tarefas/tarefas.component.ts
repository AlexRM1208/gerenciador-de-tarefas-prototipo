import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit {

  filter = '';
  tasks = [];
  filteredTasks = [];
  priorities = [
    { label: 'Todas', value: '' },
    { label: 'Baixa', value: 'low' },
    { label: 'Média', value: 'medium' },
    { label: 'Alta', value: 'high' },
    { label: 'Crítica', value: 'critical' }
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  ngOnChanges() {
    this.filteredTasks = this.filter ? this.taskService.filterTasksByPriority(this.filter) : this.tasks;
  }
  

}
