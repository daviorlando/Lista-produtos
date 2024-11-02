import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProductsByUserId(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?userId=${userId}`);
  }

  createProduct(product: Product, userId: string): Observable<Product> {
    const productWithUserId = { ...product, userId };
    return this.http.post<Product>(this.apiUrl, productWithUserId);
  }




  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }



  get(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`);
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/products/${id}`);
  }

  updateCompra(compra: boolean) {

    return this.httpClient.put(`/api/products/${compra}`, {compra});
  }

}  
