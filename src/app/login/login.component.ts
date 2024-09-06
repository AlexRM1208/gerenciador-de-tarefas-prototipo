import { Component } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { FormsModule } from '@angular/forms';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PoPageLoginModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class loginComponent {

    loginForm: FormGroup;
  
    constructor(private fb: FormBuilder, private authService: AutenticacaoService) {
      this.loginForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    onLogin() {
      if (this.loginForm.valid) {
        const { login, password } = this.loginForm.value;
        if (!this.authService.login(login, password)) {
          alert('Credenciais inválidas');
        }
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }

}
