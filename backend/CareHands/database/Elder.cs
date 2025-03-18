using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace CareHands.database;

public class Elder
{
    //Basic Info
    public int Id { get; set; }
    public char IdLetter { get; set; }
    public int ElderId { get; set; }
    [MaxLength(25)] public required string Name { get; set; }
    [MaxLength(25)] public required string LastName { get; set; }
    [Range(0, 110)] public int Age { get; set; }
    public int PhoneNumber { get; set; }
    [MaxLength(255)] public string? Email { get; set; }
    [MaxLength(100)] public string? Profession { get; set; }
    public bool IsDeleted { get; set; } = false;

    //Navigation Property
    public ElderFamilyMember FamilyMember { get; set; }
    public Worker Worker { get; set; }
}