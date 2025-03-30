using System.ComponentModel.DataAnnotations;

namespace CareHands.Dtos;

public class WorkerRegistrationDto
{
    [Required] public string UserName { get; set; }
    [Required] [EmailAddress] public string Email { get; set; }
    [Required] public char IdLetter { get; set; }
    [Required] public int WorkerId { get; set; }
    public string? Name { get; set; }
    public string? LastName { get; set; }
    public int Age { get; set; }
    public string? Role { get; set; }
    [Required] [MinLength(6)] public string Password { get; set; }
}