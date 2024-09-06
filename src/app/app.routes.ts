import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { MenuComponent } from './menu/menu.component';
import { TarefasComponent } from './tarefas/tarefas.component';

export const routes: Routes = [
    { path: 'login', component: loginComponent },
  { path: 'dashboard', component: MenuComponent },
  { path: 'tasks', component: ListaTarefasComponent },
  { path: 'my-tasks', component: TarefasComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }