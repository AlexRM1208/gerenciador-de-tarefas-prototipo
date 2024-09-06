import { Component } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { PoMenuModule } from '@po-ui/ng-components';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PoMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menus = [
    { label: 'Tarefas', action: () => this.navigate('tasks') },
    { label: 'Minhas Tarefas', action: () => this.navigate('my-tasks') },
    { label: 'Sair', action: () => this.logout() }
  ];

  constructor(private autenticacaoService: AutenticacaoService) {}

  navigate(route: string) {
    // Navegar para a rota desejada
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
