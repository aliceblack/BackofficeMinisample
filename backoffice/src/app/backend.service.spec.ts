import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

describe('BackendService', () => {

  let httpMock: HttpTestingController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        BackendService
      ]
    })
    .compileComponents();

    
    httpMock = TestBed.get(HttpTestingController);

  }));


  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: BackendService = TestBed.get(BackendService);
    expect(service).toBeTruthy();
  });


});
