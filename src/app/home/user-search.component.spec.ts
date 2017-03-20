import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

import { UserSearchComponent } from './user-search.component';
import { UserFilterPipe } from './user-filter.pipe';
import { UserService } from './user.service';
import { MockUserService } from './user.service.mock';
import { IUser } from './user';
import { users } from './user-data.mock';

describe('UserSearchComponent', () => {
  let userSearchComponent: UserSearchComponent;
  let userService: UserService;
  let userSearchComponentFixture: ComponentFixture<UserSearchComponent>;
  let element: HTMLElement;

  beforeEach(async((() => {
    TestBed.configureTestingModule({
      declarations: [
        UserSearchComponent,
        UserFilterPipe
      ],
      providers: [
        { provide: UserService, useClass: MockUserService }
      ],
      imports: [ RouterTestingModule, FormsModule ]
    });

    TestBed.compileComponents()
      .then(() => {
        userSearchComponentFixture = TestBed.createComponent(UserSearchComponent);
        userSearchComponent = userSearchComponentFixture.componentInstance;
        element = userSearchComponentFixture.debugElement.nativeElement;
        userService = TestBed.get(UserService);
      });
  })));

  it('should set the users property after initialize', async(() => {
    userSearchComponent.ngOnInit();

    userSearchComponentFixture.whenStable().then(() => {
      expect(userSearchComponent.users).toEqual(users);
    });
  }));

  it('should search the user by name', async(() => {
    userSearchComponent.searchUsers(users[0].login);

    expect(userSearchComponent.users).toEqual(users[0]);
  }));
});
