using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flashcards.Api.DataAccess;
using Flashcards.Api.Models;

namespace Flashcards.Api.Repositories
{
    public class FlashcardRepository : IFlashcardRepository
    {
        private readonly FlashcardsContext _context;

        public FlashcardRepository(FlashcardsContext context)
        {
            _context = context;
        }

        public IEnumerable<Flashcard> GetAll()
        {
            return _context.Flashcards.ToList();
        }

        public void Add(Flashcard card)
        {
            card.Id = Guid.NewGuid();
            _context.Add(card);

            _context.SaveChanges();
        }

        public Flashcard Get(string id)
        {
            return _context.Flashcards.Find(new Guid(id));
        }

        public Flashcard Remove(string id)
        {
            var flashcard = Get(id);
            if(flashcard == null) throw new ArgumentException($"Flashcard with id: {id} not found");

            _context.Flashcards.Remove(flashcard);

            _context.SaveChanges();
            return flashcard;
        }

        public void Update(Flashcard card)
        {
            if (!_context.Flashcards.Any(c => c.Id == card.Id))
            {
                throw new ArgumentException($"Flashcard with id: {card.Id} not found");
            }

            _context.Flashcards.Update(card);
            _context.SaveChanges();
        }
    }
}
