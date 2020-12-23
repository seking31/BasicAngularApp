import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../productList/product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product!: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      }
    })
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
