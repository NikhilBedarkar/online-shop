import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser | null;
  constructor(private authService: AuthService) {
    this.authService.appUser$.subscribe((user) => (this.appUser = user));
  }
  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
