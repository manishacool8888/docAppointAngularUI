import { TestBed } from '@angular/core/testing';

import { DocAppointCommonService } from './doc-appoint-common.service';

describe('DocAppointCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocAppointCommonService = TestBed.get(DocAppointCommonService);
    expect(service).toBeTruthy();
  });
});
