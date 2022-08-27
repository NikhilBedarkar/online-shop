import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private af : AuthService,private route:ActivatedRoute) {
    // let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // console.log(returnUrl);
    
   }

  login(){
   this.af.login();
  }
}
