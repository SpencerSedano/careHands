using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace CareHands.database;

public class Elder
{
    //Basic Info
    public int Id { get; set; }
    public required char IdLetter { get; set; }
    public required int ElderId { get; set; }
    [MaxLength(25)]
    public required string Name { get; set; }
    [MaxLength(25)]
    public required string LastName { get; set; }
    public required int Age { get; set; }
    public required int PhoneNumber { get; set; }
    [MaxLength(45)]
    public string? Email { get; set; }
    [MaxLength(20)]
    public required string Role { get; set; }
    public bool IsDeleted { get; set; } = false;
    
    //Family Info
    public int? FamilyMemberId { get; set; }
    
    
    //Navigation Property
    [ForeignKey("FamilyMemberId")]
    [ValidateNever]
    public ElderFamilyMember FamilyMember { get; set; }
}