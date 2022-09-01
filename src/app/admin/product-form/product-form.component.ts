import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: any={};
  category$!: Observable<any[]>;
  id;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.category$ = categoryService.getAll();
    this.id=route.snapshot.paramMap.get('id');
    if(this.id) productService.get(this.id).pipe(take(1)).subscribe(p=>this.product=p);
  }

  ngOnInit(): void {}

  save(product: any) {
    if(this.id) this.productService.update(this.id,product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure, delete this item?')) return;
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
  }
}
