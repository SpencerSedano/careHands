using CareHands.database;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthorization();
builder.Services.AddOpenApi();

builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(opt => 
  opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.MapIdentityApi<IdentityUser>();

app.MapOpenApi();
app.MapControllers();

app.MapControllers();

// app.UseExceptionHandler("/error");

app.MapGet("/", () => "Hello World!");

app.Run();
