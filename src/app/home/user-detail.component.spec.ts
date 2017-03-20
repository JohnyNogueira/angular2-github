import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Rx';

import { UserDetailComponent } from './user-detail.component';
import { MockUserService } from './user.service.mock';
import { UserService } from './user.service';
import { users } from './user-data.mock';

describe('UserDetailComponent', () => {
  let userDetailComponent: UserDetailComponent;
  let userService: UserService;
  let userDetailComponentFixture: ComponentFixture<UserDetailComponent>;
  let textDebugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent
      ],
      providers: [
        { provide: UserService, useClass: MockUserService }
      ],
      imports: [ RouterTestingModule ]
    });

    TestBed.compileComponents().then(() => {
      userDetailComponentFixture = TestBed.createComponent(UserDetailComponent);
      userDetailComponent = userDetailComponentFixture.componentInstance;
      userService = TestBed.get(UserService);
    });
  }));

  it('should set the user', async(() => {
    userDetailComponent.ngOnInit();

    expect(userDetailComponent.user).toBe(users[0]);
  }));

  it('should show back button in the user detail', async((() => {
    userDetailComponentFixture.detectChanges();
    textDebugElement = userDetailComponentFixture.debugElement.query(By.css('a.btn'));
    htmlElement = textDebugElement.nativeElement as HTMLElement;
    expect(htmlElement.innerText).toEqual('Back');
  })));

  it('should display the page title correctly', async(() => {
    userDetailComponentFixture.detectChanges();
    textDebugElement = userDetailComponentFixture.debugElement.query(By.css('div.panel-heading'));
    htmlElement = textDebugElement.nativeElement as HTMLElement;

    const pageTitle = `${userDetailComponent.pageTitle}: ${userDetailComponent.user.name}`;

    expect(htmlElement.innerText).toEqual(pageTitle);
  }));

});
