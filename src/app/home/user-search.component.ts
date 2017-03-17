import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';

@Component({
  moduleId: module.id,
  templateUrl: 'user-search.component.html',
  styleUrls: [ 'user-search.component.css' ]
})
export class UserSearchComponent implements OnInit {
  pageTitle: string;
  users: IUser[];
  errorMessage: string;
  userListFilter: string;

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this.pageTitle = 'Usuários';
    this._userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      );
  }
}
