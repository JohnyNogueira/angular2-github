import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './user.service';
import { IUser } from './user';

@Component({
  moduleId: module.id,
  templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  pageTitle: string;
  user: IUser;
  errorMessage: string;

  constructor(private _userService: UserService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pageTitle = 'Detalhes do usuário';

    this._route.params.subscribe(
      params => {
        this._userService.getUser(params['user_name'])
          .subscribe(
            user => this.user = user,
            error => this.errorMessage = <any>error
          );
    });
  }

  onBack(): void {
    this._router.navigate(['/']);
  }
}
