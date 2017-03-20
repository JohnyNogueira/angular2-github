import { Observable, Observer } from 'rxjs/Rx';
import { IUser } from './user';
import { users } from './user-data.mock';

export class MockUserService {

  public getUsers(): Observable<IUser> {
    return Observable.create((observer: Observer<Array<IUser>>) => {
      observer.next(users);
    });
  }

  public getUser(): Observable<IUser> {
    return Observable.of(users[0]);
  }

  public searchUsers(searchTerm: string): Observable<IUser> {
    return Observable.from(users)
      .filter((user: IUser) => user.login === searchTerm);
  }
}
