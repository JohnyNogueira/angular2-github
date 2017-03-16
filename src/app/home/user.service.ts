import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from './user';

@Injectable()
export class UserService {
  private _userUrl = 'https://api.github.com/users';

  constructor(private _http: Http) { }

  getUsers(): Observable<IUser[]> {
      return this._http.get(this._userUrl)
        .map((response: Response) => <IUser[]> response.json())
        .catch(this.handleError);
  }

  getUser(username: string): Observable<IUser> {
      return this._http.get(`${this._userUrl}/${username}`)
        .map((response: Response) => <IUser> response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
