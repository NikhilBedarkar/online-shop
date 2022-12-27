import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'shared/services/category.service';
import {
  faCopyright,
  faArrowRight,
  faLocation,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  categories: any;
  subscription: Subscription;
  faCopyright = faCopyright;
  faArrowRight = faArrowRight;
  faLocation = faLocation;
  faMailBulk = faMailBulk;
  faPhone = faPhone;
  constructor(private categoryService: CategoryService) {
    this.subscription = this.categories = categoryService
      .getAll()
      .subscribe((result) => {
        this.categories = result;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
