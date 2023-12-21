using System.ComponentModel.DataAnnotations;

namespace project_management.Model
{
    public class StatusDetails
    {
        [Key] 
        public int Id { get; set; }
        public string Status { get; set; }
    }
}
