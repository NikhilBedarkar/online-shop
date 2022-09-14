import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable,EMPTY } from 'rxjs';
import {switchMap } from 'rxjs';
import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$!: Observable<firebase.User | null>;
  constructor(public afAuth:AngularFireAuth,private router : Router,private route : ActivatedRoute, private userService:UserService) {
    this.user$=afAuth.authState;
   }
   getAuthStatus(){
    if(this.afAuth.authState){
      return true;
    }
    return false;
   }

   login(){
    let returnUrl1=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl1);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    //  this.af.user.subscribe(x=>console.log(x));
   }

   logout(){
    this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
    });
   }

   get appUser$():Observable<AppUser | null>{
    return this.user$
      .pipe(switchMap(user => {
        if(user) {return this.userService.get(user!.uid).valueChanges();}
        return EMPTY;
      }))
   }
   getappUser(uid:string):Observable<AppUser|null>{
    return this.userService.get(uid).valueChanges();
   }
}
