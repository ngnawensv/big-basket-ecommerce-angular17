import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  products$:Observable<any>
  categoryList: any[] = [];
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAllCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }
  getAllCategory() {

  }
}
