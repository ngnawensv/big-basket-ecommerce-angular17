import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.scss'
})
export class WebProductsComponent implements OnInit {

  productList: any[]=[];
  categoryList: any[] = [];
  constructor(private productService:ProductService,private router:Router) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToPRoducts(id: number) {
    this.router.navigate(['/products',id])
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res:any)=>{
    //  debugger;
      this.productList = res.data;
    })
  }
  getAllCategory() {
    this.productService.getAllCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }


}
