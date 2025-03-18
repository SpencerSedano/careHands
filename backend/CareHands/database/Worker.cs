using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace CareHands.database;

public class Worker : IdentityUser
{
    //Basic Info
    public char IdLetter { get; set; }
    public int WorkerId { get; set; }
    [MaxLength(25)] public string? Name { get; set; }
    [MaxLength(25)] public string? LastName { get; set; }
    [Range(0, 100)] public int Age { get; set; }
    [MaxLength(20)] public string? Role { get; set; }
    public bool IsDeleted { get; set; } = false;


    //Foreign Key
    // public string? IdentityUserId { get; set; }

    //Navigation Property
    // [ForeignKey("IdentityUserId")]
    // [ValidateNever]
    // public IdentityUser User { get; set; }

    [ValidateNever] public ICollection<Elder> Elders { get; set; }
}