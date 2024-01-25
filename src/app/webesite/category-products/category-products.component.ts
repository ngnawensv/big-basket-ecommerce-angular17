import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss'
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products: any[] = [];
  constructor(private activedRoute: ActivatedRoute,private productService:ProductService) {
    this.activedRoute.params.subscribe((res:any) => {
      debugger
      this.activeCategoryId = res.id;
      this.loadProducts();
    })
  }




  loadProducts(){
    this.productService.getProductsByCategory(this.activeCategoryId).subscribe((res: any) => {
      this.products = res.data;
    })
  }
}
