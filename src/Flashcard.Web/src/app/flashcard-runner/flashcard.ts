
export class Flashcard {
    id: string;
    wordToCheck: string;
    wordAnswerTitle: string;
    wordAnswerType: string;
    sentanceFrom: string;
    sentanceTo: string;

    public showAnswer: boolean;

    /**
     *
     */
    constructor() {
        this.showAnswer = false;
    }
}
