import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: BackendService = TestBed.get(BackendService);
    expect(service).toBeTruthy();
  });
});
