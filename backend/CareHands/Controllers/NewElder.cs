using CareHands.database;
using Microsoft.AspNetCore.Mvc;

namespace CareHands.Controllers;

// api/NewElder
[ApiController]
[Route("api/[controller]")]
public class NewElder : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public NewElder(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAllElders()
    {
        var elders = _context.Elders.ToList();

        if (elders.Any())
        {
            return Ok(elders);
        }
        
        return NotFound();
    }

    [HttpPost]
    public IActionResult AddElder([FromBody] Elder elder)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        _context.Elders.Add(elder);
        _context.SaveChanges();
        
        
        
        return Ok(elder);
    }
    
    
   
    
}