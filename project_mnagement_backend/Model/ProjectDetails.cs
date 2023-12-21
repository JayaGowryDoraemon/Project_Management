using System.ComponentModel.DataAnnotations;

namespace project_management.Model
{
    public class ProjectDetails
    {
        [Key] public int Id { get; set; }
        public string? ProjectName {  get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? Raci {  get; set; }
        public int? Status {  get; set; }
        public int? Duration { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
