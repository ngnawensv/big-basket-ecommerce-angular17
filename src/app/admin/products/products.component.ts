import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj:any={
    "productId": 0,
    "productSku": '',
    "productName": '',
    "productPrice": 0,
    "productShortName": '',
    "productDescription": '',
    "createdDate": new Date(),
    "deliveryTimeSpan": '',
    "categoryId": 0,
    "productImageUrl": '',
  }

  categoryList: any[] = [];

  productList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }


  openSidePanel() {
    this.isSidePanelVisible = true;

  }


closeSidePanel() {
  this.isSidePanelVisible=false;
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log("data==>"+res.data)
    })
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productList = res.data;
      console.log("data==>"+res.data)
    })
  }

onSave() {
  this.productService.saveProduct(this.productObj).subscribe((res: any) => {
    debugger
    if (res.result) {
      alert("Product Created");
      this.getAllProducts();
    } else {
      alert(res.message)
    }
  })
  }

  onUpdate() {
    this.productService.updateProduct(this.productObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert("Product Updated");
        this.getAllProducts();
      } else {
        alert(res.message)
      }
    })
    }


onEdit(item: any) {
  this.productObj = item
  this.openSidePanel();
}


onDelete( item:any) {
  const isDelete = confirm('Are you sure you want to delete')
  if (isDelete) {
    this.productService.deleteProduct(item.productId).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert("Product Deleted");
        this.getAllProducts();
      } else {
        alert(res.message)
      }
    })
    }
  }

}
