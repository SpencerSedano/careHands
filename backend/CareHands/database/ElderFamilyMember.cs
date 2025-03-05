using System.ComponentModel.DataAnnotations;

namespace CareHands.database;


public class ElderFamilyMember
{
    public int Id { get; set; }
    [MaxLength(25)]
    public string? Name { get; set; }
    [MaxLength(25)]
    public string? LastName { get; set; }
    [MaxLength(45)]
    public string? Email { get; set; }
    public int PhoneNumber { get; set; }
}