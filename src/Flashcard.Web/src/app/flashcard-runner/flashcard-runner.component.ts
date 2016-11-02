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
  private flashcards: Flashcard[];
  private flashcard: Flashcard;
  private flashcardIndex: number;
  private showAnswer: boolean;

  constructor(private _service: FlashcardRunnerService) { }

  ngOnInit() {
    this.showAnswer = false;
    this.flashcardIndex = 0;

    this._sub = this._service.getCards().subscribe(res => {
      this.flashcards = res;
      this.flashcard = this.flashcards[this.flashcardIndex];
    });
  }

  nextCard() {
    let maxLength = this.flashcards.length;
    if ((this.flashcardIndex + 1) < maxLength) {
      this.flashcard = this.flashcards[++this.flashcardIndex];
      this.showAnswer = false;
    }
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
