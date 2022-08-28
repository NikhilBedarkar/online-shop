import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$!:Observable<any[]>;
  constructor(categoryService:CategoryService) {
      this.category$=categoryService.getCategories();
      // console.log(this.category$);
   }

  ngOnInit(): void {
  }

  save(product: any){
    console.log(product);
    
  }

}
