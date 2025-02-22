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

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:5174");
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
            policy.AllowCredentials();
        });
});

var app = builder.Build();



app.MapIdentityApi<IdentityUser>();

app.MapOpenApi();
app.MapControllers();

app.MapControllers();

app.UseCors();

// app.UseExceptionHandler("/error");

app.MapGet("/", () => "Hello World!");

app.Run();
