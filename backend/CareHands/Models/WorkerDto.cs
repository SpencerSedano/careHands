using System.ComponentModel.DataAnnotations;

namespace CareHands.Models;


public class WorkerInfoDto
{
    [MaxLength(25)] public string? Name { get; set; }
    [MaxLength(25)] public string? LastName { get; set; }
    [Range(0, 100)] public int Age { get; set; }
    [MaxLength(20)] public string? Role { get; set; }
}