using Microsoft.EntityFrameworkCore;
using project_management.Model;

namespace project_management.DatabaseContext
{
    public class ProjectManagementDbContext : DbContext
    {
        public ProjectManagementDbContext(DbContextOptions options) : base(options) 
        { 
        }

        public DbSet<UserDetails> UsersDetailsTable { get; set; }
        public DbSet<ProjectDetails> ProjectDetailsTable { get; set; }
        public DbSet<RoleDetails> RoleDetailsTable { get; set; }
        public DbSet<StatusDetails> StatusDetailsTable { get; set; }
        public DbSet<ProjectPlanDetails> ProjectPlanDetailsTable { get; set; }

    }
}
