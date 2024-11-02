import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';
import { AuthService } from '@auth0/auth0-angular'; // Import AuthService
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  authService = inject(AuthService); // Inject AuthService


  onSubmit(product: Product) {
    this.productsService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
  constructor() {
    this.authService.user$.subscribe(user => {
      if (user) {
        const userId = user.sub;
        console.log('User ID:', user.sub);
        if (userId) {
          this.loadUserProducts(userId);
          console.log('User ID:', user.sub);
        }
      }
    });
  }

  loadUserProducts(userId: string) {
    // Carregue os produtos do usuário
    this.productsService.getProductsByUserId(userId).subscribe(_products => {
      // Lógica para lidar com os produtos do usuário
    });
  }
  
  createProduct(product: Product) {
    this.authService.user$.subscribe(user => {
      if (user) {
        const userId = user.sub; // Obtenha o ID do usuário
        if (userId) {
          this.productsService.createProduct(product, userId).subscribe(
            () => {
              this.matSnackBar.open('Produto criado com sucesso!', 'Fechar', {
                duration: 3000,
              });
              this.router.navigate(['/products']);
            },
            error => {
              this.matSnackBar.open('Erro ao criar produto!', 'Fechar', {
                duration: 3000,
              });
            }
          );
        }
      }
    });
  }

}



