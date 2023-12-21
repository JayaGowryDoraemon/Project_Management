using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using project_management.DatabaseContext;
using project_management.Model;

namespace project_management.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProjectPlanController : ControllerBase
    {
        private readonly ProjectManagementDbContext PMDContext;
        public ProjectPlanController(ProjectManagementDbContext pmdcontext)
        {
            this.PMDContext = pmdcontext;
        }
        [HttpPost]
        public IActionResult CreateProjectPlan([FromBody]ProjectPlanDetails details)
        {
            details.Status = 2;
            PMDContext.ProjectPlanDetailsTable.Add(details);
            PMDContext.SaveChanges();
            return Ok(details);
        }
        [HttpGet]
        public IActionResult GetProjectPlan(int projectId) 
        {
            var details = from projectplan in PMDContext.ProjectPlanDetailsTable
                          join status in PMDContext.StatusDetailsTable on projectplan.Status equals status.Id
                          where projectplan.ProjectName == projectId
                          select new
                          {
                              projectPlanId = projectplan.Id,
                              status = status.Status,
                              projectPlanName = projectplan.ProjectPlan,
                              DueDate = projectplan.DueDate,

                          };
                          return Ok(details);
        }
    }
}
