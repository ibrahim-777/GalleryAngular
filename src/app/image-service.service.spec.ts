import { TestBed } from '@angular/core/testing';

import { ImageService } from './shared/Image';

describe('ImageServiceService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
