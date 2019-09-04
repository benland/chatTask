import { TestBed } from '@angular/core/testing';

import { ChatContactsService } from './chat-contacts.service';

describe('ChatContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatContactsService = TestBed.get(ChatContactsService);
    expect(service).toBeTruthy();
  });
});
