import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Flashcard } from './flashcard';

@Injectable()
export class FlashcardRunnerService {

    constructor(private _http: Http) { }

    getCards() : Observable<Flashcard[]> {
        return this._http.get('/api/flashcard')
            .map(res => res.json());
    }

}
