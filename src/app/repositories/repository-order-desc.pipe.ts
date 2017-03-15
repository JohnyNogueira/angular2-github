import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'repositoryOrderDesc'
})
export class RepositoryOrderDesc implements PipeTransform {

    transform(value: any[]): any[] {
      return value.sort((repositoryBefore, repositoryAfter) => {
        if (repositoryBefore.stargazers_count > repositoryAfter.stargazers_count) {
          return -1;
        }

        if (repositoryBefore.stargazers_count < repositoryAfter.stargazers_count) {
          return 1;
        }

        return 0;
      });
    }
}
