import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { FlashcardRunnerComponent } from './flashcard-runner/flashcard-runner.component';
import { FlashcardRunnerService } from './flashcard-runner/flashcard-runner.service';
import { FlashcardManagerComponent } from './flashcard-manager/flashcard-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardRunnerComponent,
    FlashcardManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'flashcard-testing', component: FlashcardRunnerComponent },
      { path: 'flashcard-manager', component: FlashcardManagerComponent },
      { path: '', redirectTo: '/flashcard-testing', pathMatch: 'full' }
    ]),
    MaterialModule.forRoot()
  ],
  providers: [FlashcardRunnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
