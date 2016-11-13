import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';


import { Flashcard } from './flashcard';

@Injectable()
export class FlashcardRunnerService {
    private apiUrl = '/api/flashcard';

    constructor(private _http: Http) { }

    getCards(): Observable<Flashcard[]> {
        return this._http.get(this.apiUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addNewCard(flashcard: Flashcard) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.apiUrl, flashcard, options)
            .catch(this.handleError);
    }

    handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

}
