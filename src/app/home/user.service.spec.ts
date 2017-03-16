import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions
} from '@angular/http';

import { UserService } from './user.service';

describe('UserService', () => {
  const mockResponse = [
    {
      login: 'mojombo',
      id: 1,
      avatar_url: 'https://avatars3.githubusercontent.com/u/1?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      site_admin: false
    }
  ];

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  }));

  describe('getUsers()', () => {

    it('should parse response', async(inject(
      [UserService, MockBackend], (service, mockBackend) => {

      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(
          new ResponseOptions({ body: JSON.stringify(mockResponse) })
        ));
      });

      service.getUsers().subscribe(res => {
        expect(res).toEqual(mockResponse);
      });
    })));

  });

});
