import { TestBed } from '@angular/core/testing';

import { ServicioUserRandomService } from './servicio-user-random.service';

describe('ServicioUserRandomService', () => {
  let service: ServicioUserRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUserRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
