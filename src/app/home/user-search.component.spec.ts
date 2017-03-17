import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

import { UserSearchComponent } from './user-search.component';
import { UserFilterPipe } from './user-filter.pipe';
import { UserService } from './user.service';
import { MockUser } from './mocker-user';

describe('UserSearchComponent', () => {
  let userSearchComponent: UserSearchComponent;
  let userService: UserService;
  let userSearchComponentFixture: ComponentFixture<UserSearchComponent>;
  const Users = [
    {
      name: 'Luan Curti', followers: 13, following: 15, email: 'luancurti@gmail.com',
      avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
    },
    {
      name: 'Lionel Messi', followers: 13000000, following: 123, email: 'lionel@gmail.com',
      avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
    }
  ];

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        UserSearchComponent,
        UserFilterPipe
      ],
      providers: [
        { provide: UserService, useClass: MockUser }
      ],
      imports: [ RouterTestingModule, FormsModule ]
    }).compileComponents();

    userSearchComponentFixture = TestBed.createComponent(UserSearchComponent);

    userSearchComponent = userSearchComponentFixture.componentInstance;

    userService = TestBed.get(UserService);

    spyOn(userService, 'getUsers').and.returnValue(Observable.from(Users));
  }));

  it('should set the user', () => {
    userSearchComponent.ngOnInit();

    expect(userSearchComponent.users).toBe(Users);
  });
});
