using System.ComponentModel.DataAnnotations;

namespace project_management.Model
{
    public class RoleDetails
    {
        [Key]
        public int Id {  get; set; }
        public string Role {  get; set; }
    }
}
