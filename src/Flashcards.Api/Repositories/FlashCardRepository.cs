using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using Flashcards.Api.Models;
using Flashcards.Api.Services;

namespace Flashcards.Api.Repositories
{
    public class FlashcardRepository : IFlashcardRepository
    {
        private static ConcurrentDictionary<string, Flashcard> _flashCards = new ConcurrentDictionary<string, Flashcard>();

        public FlashcardRepository()
        {
            _flashCards = FlashcardSeeder.GetSeeds();
        }

        public IEnumerable<Flashcard> GetAll()
        {
            return _flashCards.Values;
        }

        public void Add(Flashcard card)
        {
            card.Id = Guid.NewGuid();
            _flashCards.TryAdd(card.Id.ToString(), card);
        }

        public Flashcard Get(string id)
        {
            Flashcard card;
            _flashCards.TryGetValue(id, out card);
            return card;
        }

        public Flashcard Remove(string id)
        {

            Flashcard card;
            _flashCards.TryRemove(id, out card);
            return card;
        }

        public void Update(Flashcard card)
        {
            if (_flashCards.ContainsKey(card.Id.ToString()))
                _flashCards[card.Id.ToString()] = card;
        }
    }
}