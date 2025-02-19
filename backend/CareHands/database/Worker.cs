using System.ComponentModel.DataAnnotations;

namespace CareHands.database;

public class Worker
{
    //Basic Info
    public int Id { get; set; }
    public required char IdLetter { get; set; }
    public required int WorkerId { get; set; }
    [MaxLength(25)]
    public required string Name { get; set; }
    [MaxLength(25)]
    public required string LastName { get; set; }
    public required int Age { get; set; }
    public required int PhoneNumber { get; set; }
    [MaxLength(45)]
    public required string Email { get; set; }
    //I will need to think how to add password, if I create another class or record and link it through a foreign key to the actual worker, and the class or record only contains the Email, password, and foreign key. The foreign key will lead to here, this worker, but the email and password for authentication and authorization (sign up and login system) will be stored in another class or record
    [MaxLength(20)]
    public required string Role { get; set; }
    public bool IsDeleted { get; set; } = false;
    
    //Foreign Key
    // public required Elder AssignedElder { get; set; }
    
}