using Microsoft.EntityFrameworkCore;

namespace CareHands.database;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Worker> Workers { get; set; }
    public DbSet<Elder> Elders { get; set; }
}