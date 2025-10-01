import { TestBed } from '@angular/core/testing';

import { ServicioProducto } from './servicio-producto';

describe('ServicioProducto', () => {
  let service: ServicioProducto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProducto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
