using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CareHands.database;

public class ElderFamilyMember
{
    public int Id { get; set; }
    [MaxLength(25)] public string? Name { get; set; }
    [MaxLength(25)] public string? LastName { get; set; }
    [MaxLength(255)] public string? Email { get; set; }
    public int PhoneNumber { get; set; }

    [ForeignKey("Elder")] public int ElderId { get; set; }

    //Navigation Property
    public Elder Elder { get; set; }
}