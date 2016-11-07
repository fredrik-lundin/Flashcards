
export class Flashcard {
    id: string;
    wordToCheck: string;
    wordAnswerTitle: string;
    wordAnswerType: string;
    sentenceFrom: string;
    sentenceTo: string;

    public showAnswer: boolean;

    /**
     *
     */
    constructor() {
        this.showAnswer = false;
    }
}
