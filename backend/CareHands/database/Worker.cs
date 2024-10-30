namespace CareHands.database
{
    public class Worker
    {
        public int Id { get; set; }
        public int WorkerId { get; set; }
        public required string Name { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Role { get; set; }
    }
}