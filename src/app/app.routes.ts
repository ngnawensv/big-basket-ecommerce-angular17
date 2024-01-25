import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { LandingComponent } from './webesite/landing/landing.component';
import { CategoryProductsComponent } from './webesite/category-products/category-products.component';
import { WebProductsComponent } from './webesite/web-products/web-products.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'allProducts',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'allProducts',
        component: WebProductsComponent
      },
      {
        path: 'products/:id',
        component:CategoryProductsComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'category',
        component: CategoriesComponent
     }
    ]
  }
];
