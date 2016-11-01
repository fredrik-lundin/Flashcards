using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flashcards.Api.Models;
using Flashcards.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace Flashcards.Api.Controllers
{
    [Route("api/[controller]")]
    public class FlashcardController : Controller
    {
        private readonly IFlashcardRepository _repository;

        public FlashcardController(IFlashcardRepository repository)
        {
            _repository = repository;
        }

        // GET: api/flashcard
        [HttpGet]
        public IEnumerable<Flashcard> GetAll()
        {
            return _repository.GetAll();
        }

        // GET api/flashcard/5
        [HttpGet("{id}", Name = "GetFlashcard")]
        public IActionResult Get(string id)
        {
            var card = _repository.Get(id);
            if(card == null) return NotFound();

            return new ObjectResult(card);
        }

        // POST api/flashcard
        [HttpPost]
        public IActionResult Post([FromBody]Flashcard card)
        {
            if (card == null)
            {
                return BadRequest();
            }
            _repository.Add(card);

            return CreatedAtRoute("GetFlashcard", new { id = card.Id.ToString() }, card );
        }

        // PUT api/flashcard/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]Flashcard card)
        {
            if (card == null || card.Id.ToString() != id)
            {
                return BadRequest();
            }

            var oldCard = _repository.Get(id);
            if (oldCard == null)
            {
                return NotFound();
            }

            _repository.Update(card);
            return new NoContentResult();
        }

        // DELETE api/flashcard/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var card = _repository.Get(id);
            if (card == null)
            {
                return NotFound();
            }

            _repository.Remove(id);
            return new NoContentResult();
        }
    }
}
