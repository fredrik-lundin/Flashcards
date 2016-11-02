using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flashcards.Api.Models;

namespace Flashcards.Api.Services
{
    public static class FlashcardSeeder
    {
        public static ConcurrentDictionary<string, Flashcard> GetSeeds()
        {
            var seeds = new List<Flashcard>
            {
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Sykkel",
                    WordAnswerTitle = "Bicycle",
                    WordAnswerType = "noun",
                    SentanceFrom = "Jeg har en ny sykkel",
                    SentanceTo = "I have a new bike"
                },
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Spise",
                    WordAnswerTitle = "Eat, Dine",
                    WordAnswerType = "verb",
                    SentanceFrom = "Jeg har en ny sykkel",
                    SentanceTo = "Du må spise nå"
                }
            };

            var dict = new ConcurrentDictionary<string, Flashcard>();
            foreach (var flashcard in seeds)
            {
                dict[flashcard.Id.ToString()] = flashcard;
            }
            return dict;
        }

    }
}
