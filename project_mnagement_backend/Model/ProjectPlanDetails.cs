using System.ComponentModel.DataAnnotations;

namespace project_management.Model
{
    public class ProjectPlanDetails
    {
        [Key] public int Id { get; set; }
        public int? ProjectName { get; set; }
        public string? ProjectPlan {  get; set; }
        public DateTime? DueDate { get; set; }
        public int? Status { get; set; }

    }
}
