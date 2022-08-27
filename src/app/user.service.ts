import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from '@firebase/util';
import firebase from 'firebase/compat/app';
import { AppUser } from './models/app-user';
// import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db:AngularFireDatabase) { 
  }
  save(user : firebase.User){
    console.log(user);
    
      this.db.object('/users/'+user.uid).update({
        name:user.displayName,
        email:user.email
      });
  }

  get(uid:string):AngularFireObject<AppUser>{
    return this.db.object('/users/'+uid);
  }
}
