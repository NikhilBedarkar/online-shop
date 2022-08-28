import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shop';
  constructor(private router : Router, private authService : AuthService,private userSerice:UserService){

    authService.user$.subscribe(user => {
      if(user){
        userSerice.save(user);
      let returnUrl=localStorage.getItem('returnUrl');
      if (returnUrl) {
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
      }
    })
  }
}
