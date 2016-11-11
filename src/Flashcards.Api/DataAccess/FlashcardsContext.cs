using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flashcards.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Flashcards.Api.DataAccess
{
    public class FlashcardsContext: DbContext
    {
        public FlashcardsContext(DbContextOptions<FlashcardsContext> options)
            : base(options)
        { }

        public DbSet<Flashcard> Flashcards { get; set; }
    }
}
