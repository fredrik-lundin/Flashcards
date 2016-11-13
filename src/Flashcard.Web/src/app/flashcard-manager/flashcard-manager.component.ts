import { Component, OnInit } from '@angular/core';
import { Flashcard } from './../flashcard-runner/flashcard';
import { FlashcardRunnerService } from './../flashcard-runner/flashcard-runner.service';


@Component({
  selector: 'app-flashcard-manager',
  templateUrl: './flashcard-manager.component.html',
  styleUrls: ['./flashcard-manager.component.scss']
})
export class FlashcardManagerComponent implements OnInit {
  private showNewCardForm: boolean;
  private addingCard: boolean;
  private addedCardErrorMessage: string;
  private addedCardSuccessMessage: string;

  constructor(private service: FlashcardRunnerService) { }

  ngOnInit() {
    this.resetFormState();
  }

  showForm() {
    this.resetFormState();
    this.showNewCardForm = true;
  }

  resetFormState() {
    this.showNewCardForm = false;
    this.addingCard = false;
    this.addedCardErrorMessage = '';
    this.addedCardSuccessMessage = '';
  }

  onSubmit({value, valid}: { value: Flashcard, valid: boolean }) {
    this.addingCard = true;

    this.service.addNewCard(value)
      .subscribe(res => {
        this.addedCardSuccessMessage = 'New card added successfully';
        this.addingCard = false;
        setTimeout(() => this.showNewCardForm = false, 2000);
      },
      error => {
        this.addedCardErrorMessage = 'An error prevented the flashcard to be added - sorry about that!';
        this.addingCard = false;
      });
  }
}
