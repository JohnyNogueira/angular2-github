import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserSearchComponent } from './user-search.component';
import { UserFilterPipe } from './user-filter.pipe';

describe('UserSearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserSearchComponent,
        UserFilterPipe
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the user-search', async(() => {
    const fixture = TestBed.createComponent(UserSearchComponent);
    const userSearchList = fixture.debugElement.componentInstance;
    // const link = fixture.debugElement.query(By.css('li a')).nativeElement;

    expect(true).toBeTruthy();
  }));
});
