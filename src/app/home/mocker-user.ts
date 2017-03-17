import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from './user';

const users = [
  {
    name: 'Luan Curti', followers: 13, following: 15, email: 'luancurti@gmail.com',
    avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
  },
  {
    name: 'Lionel Messi', followers: 13000000, following: 123, email: 'lionel@gmail.com',
    avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
  }
];

@Injectable()
export class MockUser {

  public getUsers(): Observable<IUser> {
    return Observable.from(users);
  }

  public getUser(): Observable<IUser> {
    return Observable.of(users[0]);
  }
}
