using Microsoft.AspNetCore.Mvc;
using CareHands.database;
using Microsoft.AspNetCore.Authorization;

namespace CareHands.Controllers;


[ApiController]
[Route("api/[controller]")]
public class Dashboard : ControllerBase
{

    private readonly ApplicationDbContext _context;

    public Dashboard(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult SecuredEndpoint()
    {
        Console.WriteLine("Entered");
        return Ok("Good job");
    }
    

}