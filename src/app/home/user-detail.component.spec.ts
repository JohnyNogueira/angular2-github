import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Rx';

import { UserDetailComponent } from './user-detail.component';
import { MockUser } from './mocker-user';
import { UserService } from './user.service';

describe('UserDetailComponent', () => {
  let userDetailComponent: UserDetailComponent;
  let userService: UserService;
  const User = {
    name: 'Luan Curti', followers: 13, following: 15, email: 'luancurti@gmail.com',
    avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3', bio: ''
  };
  let userDetailComponentFixture: ComponentFixture<UserDetailComponent>;
  let textDebugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent
      ],
      providers: [
        { provide: UserService, useClass: MockUser }
      ],
      imports: [ RouterTestingModule ]
    });

    userDetailComponentFixture = TestBed.createComponent(UserDetailComponent);

    userDetailComponent = userDetailComponentFixture.componentInstance;

    userService = TestBed.get(UserService);

    spyOn(userService, 'getUser').and.returnValue(Observable.of(User));
  });

  it('should set the user', () => {
    userDetailComponent.ngOnInit();

    expect(userDetailComponent.user).toBe(User);
  });

  it('should show back button in the user detail', (() => {
    userDetailComponentFixture.detectChanges();
    textDebugElement = userDetailComponentFixture.debugElement.query(By.css('a.btn'));
    htmlElement = textDebugElement.nativeElement as HTMLElement;
    expect(htmlElement.innerText).toEqual('Back');
  }));

  it('should display the page title correctly', () => {
    userDetailComponentFixture.detectChanges();
    textDebugElement = userDetailComponentFixture.debugElement.query(By.css('div.panel-heading'));
    htmlElement = textDebugElement.nativeElement as HTMLElement;

    const pageTitle = `${userDetailComponent.pageTitle}: ${userDetailComponent.user.name}`;

    expect(htmlElement.innerText).toEqual(pageTitle);
  });

});
