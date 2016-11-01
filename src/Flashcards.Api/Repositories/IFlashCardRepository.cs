using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flashcards.Api.Models;

namespace Flashcards.Api.Repositories
{
    public interface IFlashcardRepository
    {
        IEnumerable<Flashcard> GetAll();
        void Add(Flashcard card);
        Flashcard Get(string id);
        Flashcard Remove(string id);
        void Update(Flashcard card);
    }
}
