import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'repository-detail.component.html'
})
export class RepositoryDetailComponent implements OnInit {
  pageTitle: string;
  repository: any;
  errorMessage: string;

  constructor(private _repositoryService: RepositoryService,
              private _router: Router,
              private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.pageTitle = 'Detalhes do repositório';

    this._route.params.subscribe(
      params => {
        this._repositoryService.getRepository(
          params['user_name'],
          params['repo_name']
        )
          .subscribe(
            repository => this.repository = repository,
            error => this.errorMessage = <any>error
          );
    });
  }

  onBack(): void {
    this._route.params.subscribe(
      params => {
        this._router.navigate([`/repos/${params['user_name']}`]);
      }
    );
  }
}
