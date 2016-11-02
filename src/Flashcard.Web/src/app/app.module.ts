import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

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
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [FlashcardRunnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
