import { TestBed } from '@angular/core/testing';

import { NotfyService } from './notify.service';

describe('NotfyService', () => {
  let service: NotfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
