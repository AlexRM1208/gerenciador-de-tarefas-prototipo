import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { PoFieldModule} from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoButtonModule } from '@po-ui/ng-components';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [PoFieldModule, PoPageModule, FormsModule, PoButtonModule, CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {

  task = { name: '', startDate: null, endDate: null, priority: null };
  priorities = [
    { label: 'Baixa', value: 'low' },
    { label: 'Média', value: 'medium' },
    { label: 'Alta', value: 'high' },
    { label: 'Crítica', value: 'critical' }
  ];

  constructor(private TaskService: TaskService, private router: Router) {}

  saveTask() {
    this.TaskService.addTask(this.task);
    this.router.navigate(['/my-tasks']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  addSubTask() {
    this.router.navigate(['/add-sub-task']);
  }

}
