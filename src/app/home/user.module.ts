import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserSearchComponent } from './user-search.component';
import { UserDetailComponent } from './user-detail.component';
import { UserFilterPipe } from './user-filter.pipe';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserSearchComponent,
    UserDetailComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: UserSearchComponent },
      { path: ':user_name', component: UserDetailComponent }
    ])
  ],
  providers: [UserService]
})
export class UserModule { }
