using CareHands.database;
using Microsoft.AspNetCore.Mvc;

namespace CareHands.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DeleteAccount : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public DeleteAccount(ApplicationDbContext context)
    {
        _context = context;
    }

    //Delete One by One
    [HttpDelete("{id:int}")]
    public IActionResult DeleteWorker(int id)
    {
        var workerToDelete = _context.Workers.Find(id);
        if (workerToDelete == null)
        {
            return NotFound("Worker not found");
        }
        
        _context.Workers.Remove(workerToDelete);
        _context.SaveChanges();
        
        return NoContent();
    }
    
    //WARNING
    //Delete Everything
    [HttpDelete("DeleteAllWorkers")]
    public IActionResult DeleteAllWorkers()
    {
        _context.Workers.RemoveRange(_context.Workers);
        _context.SaveChanges();
        
        return NoContent();
    }
}