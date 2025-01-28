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

    [HttpPost]
    public IActionResult NewWorker([FromBody] Worker worker)
    {
        _context.Workers.Add(worker);
        _context.SaveChanges();
        return Ok(worker);
    }

    [HttpGet]
    public IActionResult GetAllWorkers()
    {
        if (_context.Workers.Any())
        {
            return Ok(_context.Workers.ToList());
        }
        else
        {
            return NotFound();
        }
    }
}