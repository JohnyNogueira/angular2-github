import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RepositoryService {
  private _repositoriesUrl = 'https://api.github.com/users';
  private _repositoryDetailUrl = 'https://api.github.com/repos';

  constructor(private _http: Http) { }

  getRepositories(username: string): Observable<any[]> {
    return this._http.get(`${this._repositoriesUrl}/${username}/repos`)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError);
  }

  getRepository(username: string, repository: string): Observable<any[]> {
    return this._http.get(`${this._repositoryDetailUrl}/${username}/${repository}`)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
