using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CareHands.database;

namespace CareHands.Controllers
{
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
    }
}