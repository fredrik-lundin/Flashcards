import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { FlashcardRunnerComponent } from './flashcard-runner/flashcard-runner.component';
import { FlashcardRunnerService } from './flashcard-runner/flashcard-runner.service';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardRunnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlashcardRunnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
