import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FlashcardRunnerService } from './flashcard-runner.service';
import { Flashcard } from './flashcard';

@Component({
  selector: 'app-flashcard-runner',
  templateUrl: './flashcard-runner.component.html',
  styleUrls: ['./flashcard-runner.component.scss']
})
export class FlashcardRunnerComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  private flashcardsAll: Flashcard[];
  private flashcardsShowing: Flashcard[];
  private flashcardIndex: number;
  private currentFlashcardId: string;

  constructor(private _service: FlashcardRunnerService) { }

  ngOnInit() {
    this.flashcardIndex = 0;
    this.flashcardsShowing = [];
    this.currentFlashcardId = '';

    this._sub = this._service.getCards().subscribe(res => {
      this.flashcardsAll = res;
      this.flashcardsShowing.unshift(this.flashcardsAll[this.flashcardIndex]);
      this.currentFlashcardId = this.flashcardsShowing[0].id;
    });
  }

  nextCard() {
    let maxLength = this.flashcardsAll.length;
    if ((this.flashcardIndex + 1) < maxLength) {
      this.flashcardsShowing.unshift(this.flashcardsAll[++this.flashcardIndex]);
      this.currentFlashcardId = this.flashcardsShowing[0].id;
    }
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
