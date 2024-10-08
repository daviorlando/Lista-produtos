import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule,

    MatCardModule,

    MatButtonModule,

  
],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  product = input.required<Product>();



  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}

// Removed local Product interface declaration
