import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Flashcard } from './../../flashcard-runner/flashcard';
import { FlashcardRunnerService } from './../../flashcard-runner/flashcard-runner.service';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.scss']
})
export class FlashcardFormComponent implements OnInit {
  private addingCard: boolean;
  private addedCardErrorMessage: string;
  private addedCardSuccessMessage: string;
  @Input() card: Flashcard = new Flashcard();
  @Output() cancelForm = new EventEmitter<void>();

  constructor(private service: FlashcardRunnerService) { }

  ngOnInit() {
    this.resetFormState();
  }

  onCancel() {
    this.cancelForm.emit();
  }

  resetFormState() {
    this.addedCardErrorMessage = '';
    this.addedCardSuccessMessage = '';
  }

  onSubmit({value, valid}: { value: Flashcard, valid: boolean }) {
    this.addingCard = true;

    this.service.postFlashcard(this.card)
      .subscribe(res => {
        if (this.card.id) {
          this.addedCardSuccessMessage = 'Card successfully updated';
        } else {
          this.addedCardSuccessMessage = 'New card added successfully';
        }

        this.addingCard = false;
        setTimeout(() => this.cancelForm.emit(), 2000);
      },
      error => {
        this.addedCardErrorMessage = 'An error prevented the flashcard to be added - sorry about that!';
        this.addingCard = false;
      });
  }

}
