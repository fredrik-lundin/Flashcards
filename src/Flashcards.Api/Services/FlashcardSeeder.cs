using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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
                    WordToCheck = "Fryd",
                    WordAnswerTitle = "Pleasure, Delight",
                    WordAnswerType = "noun",
                    SentenceFrom = "Det er en fryd å jobbe med deg",
                    SentenceTo = "It's a pleasure working with you"
                },
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Sykkel",
                    WordAnswerTitle = "Bicycle",
                    WordAnswerType = "noun",
                    SentenceFrom = "Jeg har en ny sykkel",
                    SentenceTo = "I have a new bicycle"
                },
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Spise",
                    WordAnswerTitle = "Eat, Dine",
                    WordAnswerType = "verb",
                    SentenceFrom = "Du må spise nå",
                    SentenceTo = "You have to eat now"
                }
            };

            return new ConcurrentDictionary<string, Flashcard>(seeds.ToDictionary(x => x.Id.ToString()));
        }

    }
}
