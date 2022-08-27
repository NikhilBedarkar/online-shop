import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser|null;
  constructor(private af: AuthService) {
    let v: AppUser;
   this.af.appUser$.subscribe(user =>{ this.appUser=user
   console.log(user,this.appUser);});
   console.log(this.appUser);
   
  }
  ngOnInit(): void {
    
   
  }

  logout() {
   this.af.logout();
  }
}
