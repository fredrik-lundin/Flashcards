import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FlashcardRunnerService } from './flashcard-runner.service';

@Component({
  selector: 'app-flashcard-runner',
  templateUrl: './flashcard-runner.component.html',
  styleUrls: ['./flashcard-runner.component.css']
})
export class FlashcardRunnerComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  private Data;

  constructor(private _service: FlashcardRunnerService) { }

  ngOnInit() {
    this._sub = this._service.getCards().subscribe(res => this.Data = res);
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
