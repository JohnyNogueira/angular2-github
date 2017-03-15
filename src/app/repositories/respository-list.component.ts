import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RepositoryService } from './repository.service';

@Component({
  moduleId: module.id,
  templateUrl: 'repository-list.component.html'
})
export class RepositoryListComponent implements OnInit {
  pageTitle: string;
  repositories: any[];
  errorMessage: string;

  constructor(private _repositoriesService: RepositoryService,
              private _router: Router,
              private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.pageTitle = 'Repositórios';

    this._route.params.subscribe(
      params => {
        this._repositoriesService.getRepositories(params['user_name'])
          .subscribe(
            repositories => this.repositories = repositories,
            error => this.errorMessage = <any>error
          );
    });
  }

  onBack(): void {
    this._route.params.subscribe(
      params => {
        this._router.navigate(['/']);
      }
    );
  }

}
