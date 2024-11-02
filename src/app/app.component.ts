import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthService } from '@auth0/auth0-angular'; // Importe o AuthService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {
    // Verificando se o usuário está autenticado
    this.auth.isLoading$.subscribe((loading) => {
      if (!loading) {
        this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
          if (isAuthenticated) {
            this.auth.user$.subscribe((user) => {
              console.log('ID do usuário:', user?.sub);  // Pega o ID do usuário logado
            });
          } else {
            console.log('Usuário não está logado');
          }
        });
      } else {
        console.log('Aguardando carregamento de autenticação...');
      }
    });
  }
}