import { TestBed } from '@angular/core/testing';

import { GlobalGuiService } from './global-gui.service';

describe('GlobalGuiService', () => {
  let service: GlobalGuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalGuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
