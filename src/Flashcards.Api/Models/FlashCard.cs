using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flashcards.Api.Models
{
    public class Flashcard
    {
        public Guid Id { get; set; }
        public string WordToCheck { get; set; }
        public string WordAnswerTitle { get; set; }
        public string WordAnswerType { get; set; }
        public string SentenceFrom { get; set; }
        public string SentenceTo { get; set; }
    }
}
