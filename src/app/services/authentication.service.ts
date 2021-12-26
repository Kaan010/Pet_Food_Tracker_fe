import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";


const API_URL= '${environment.BASE_URL}/api/user/'
const API_URL1= 'http://localhost:8080/api/user/'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<User>;
  private  currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
      let storageUser;
      const storageUserAsStr=localStorage.getItem('currentUser');
      if(storageUserAsStr){
        storageUser=JSON.parse(storageUserAsStr);
      }
      this.currentUserSubject=new BehaviorSubject<User>(storageUser);
      this.currentUser=this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  login(username: string,password: string): Observable<any>{
    return this.http.post<any>(API_URL1+ 'sign-in',{username,password})
      .pipe(map(user => {
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
  }

  register(user:User):Observable<any>{
    return this.http.post(API_URL1+"sign-up",user);
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User);
  }

}
