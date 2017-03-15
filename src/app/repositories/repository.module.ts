import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RepositoryListComponent } from './respository-list.component';
import { RepositoryService } from './repository.service';
import { RepositoryDetailComponent } from './repository-detail.component';
import { RepositoryOrderDesc } from './repository-order-desc.pipe';

@NgModule({
  declarations: [
    RepositoryListComponent,
    RepositoryDetailComponent,
    RepositoryOrderDesc
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: 'repos/:user_name', component: RepositoryListComponent },
      { path: 'repos/:user_name/:repo_name', component: RepositoryDetailComponent }
    ])
  ],
  providers: [RepositoryService]
})
export class RepositoryModule { }
