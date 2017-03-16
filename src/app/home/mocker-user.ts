import { Observable } from 'rxjs/Rx';

import { IUser } from './user';

const User = {
  name: 'Luan Curti', followers: 13, following: 15, email: 'luancurti@gmail.com',
  avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
};

export class MockUser {

  public getUser(): Observable<IUser> {
    return Observable.of(User);
  }
}
