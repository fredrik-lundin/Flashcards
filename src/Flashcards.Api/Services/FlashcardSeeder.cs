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
                    SentanceFrom = "Det er en fryd å jobbe med deg",
                    SentanceTo = "It's a pleasure working with you"
                },
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Sykkel",
                    WordAnswerTitle = "Bicycle",
                    WordAnswerType = "noun",
                    SentanceFrom = "Jeg har en ny sykkel",
                    SentanceTo = "I have a new bicycle"
                },
                new Flashcard()
                {
                    Id = Guid.NewGuid(),
                    WordToCheck = "Spise",
                    WordAnswerTitle = "Eat, Dine",
                    WordAnswerType = "verb",
                    SentanceFrom = "Du må spise nå",
                    SentanceTo = "You have to eat now"
                }
            };

            return new ConcurrentDictionary<string, Flashcard>(seeds.ToDictionary(x => x.Id.ToString()));
        }

    }
}
