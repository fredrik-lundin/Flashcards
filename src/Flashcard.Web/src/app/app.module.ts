import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FlashcardFormComponent } from './flashcard-manager/flashcard-form/flashcard-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardRunnerComponent,
    FlashcardManagerComponent,
    FlashcardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'flashcard-testing', component: FlashcardRunnerComponent },
      { path: 'flashcard-manager', component: FlashcardManagerComponent },
      { path: '', redirectTo: '/flashcard-testing', pathMatch: 'full' }
    ]),
    MaterialModule
  ],
  providers: [FlashcardRunnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
