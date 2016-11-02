/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashcardRunnerService } from './flashcard-runner.service';

describe('Service: FlashcardRunner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashcardRunnerService]
    });
  });

  it('should ...', inject([FlashcardRunnerService], (service: FlashcardRunnerService) => {
    expect(service).toBeTruthy();
  }));
});
