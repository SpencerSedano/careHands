using Microsoft.AspNetCore.Mvc;
using CareHands.database;
using CareHands.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CareHands.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CreateAccount : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private SignInManager<Worker> _signInManager;
    private UserManager<Worker> _userManager;
    
    public CreateAccount(ApplicationDbContext context, SignInManager<Worker> signInManager, UserManager<Worker> userManager)
    {
        _context = context;
        _signInManager = signInManager;
        _userManager = userManager;
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

    //Registering a new worker
    [HttpPost]
    public async Task<IActionResult> NewWorker([FromBody] WorkerRegistrationDto registration)
    {
        bool workerExists = await _context.Workers
            .AnyAsync(x => x.WorkerId == registration.WorkerId && x.IdLetter == registration.IdLetter);
        
        
        if(workerExists)
        {
            return BadRequest("Worker already exists");
        }
        
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var worker = new Worker
        {
            UserName = registration.UserName,
            Email = registration.Email,
            IdLetter = registration.IdLetter,
            WorkerId = registration.WorkerId,
            Name = registration.Name,
            LastName = registration.LastName,
            Age = registration.Age,
            Role = registration.Role
        };
        
        var result = await _userManager.CreateAsync(worker, registration.Password);
        
        if (!result.Succeeded)
        {
            return BadRequest(result.Errors.Select(x => x.Description));
        }

        return Ok(new { 
            worker.Id,
            worker.UserName,
            worker.Email,
            worker.WorkerId,
            worker.IdLetter
        });
    }
}

