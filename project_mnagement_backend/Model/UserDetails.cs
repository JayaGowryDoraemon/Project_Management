using System.ComponentModel.DataAnnotations;

namespace project_management.Model
{
    public class UserDetails
    {
        [Key]
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public int? Role {  get; set; }
        public string? PhoneNumber {  get; set; }


    }
}
