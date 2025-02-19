using Microsoft.AspNetCore.Mvc;
using CareHands.database;

namespace CareHands.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CreateAccount : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CreateAccount(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public IActionResult GetAllWorkers()
    {
        var workers = _context.Workers.Where(x => x.IsDeleted == false);
        if (workers.Any())
        {
            return Ok(_context.Workers.ToList());
        }
        return NotFound();
    }

    [HttpPost]
    public IActionResult NewWorker([FromBody] Worker worker)
    {
        var workersIds = _context.Workers.Where(x => x.WorkerId == worker.WorkerId);
        var workersIdsLetter = _context.Workers.Where(x => x.IdLetter == worker.IdLetter);
        
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        if(workersIds.Any() && workersIdsLetter.Any())
        {
            return BadRequest("Worker already exists");
        }
        
        _context.Workers.Add(worker);
        _context.SaveChanges();
        return Ok(worker);
    }
}