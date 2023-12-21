using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using project_management.DatabaseContext;
using project_management.Model;

namespace project_management.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProjectDetailsController : ControllerBase
    {
        private readonly ProjectManagementDbContext PMDContext;
        public ProjectDetailsController(ProjectManagementDbContext pmdcontext)
        {
            this.PMDContext = pmdcontext;
        }
        [HttpPost]
        public IActionResult CreateProject([FromBody]ProjectDetails details)
        {
            details.IsDeleted = false;
            PMDContext.ProjectDetailsTable.Add(details);
            PMDContext.SaveChanges();
            return Ok(details);
        }
        [HttpGet]
        public IActionResult GetProject()
        {
            // var details = PMDContext.ProjectDetailsTable.ToList();
            // return Ok(details);
            var details = from project in PMDContext.ProjectDetailsTable
                          join status in PMDContext.StatusDetailsTable on project.Status equals status.Id where project.IsDeleted==false
                          select new
                          {   projectId=project.Id,
                              ProjectName = project.ProjectName,
                              StartDate= project.StartDate,
                              EndDate= project.EndDate,
                              Raci= project.Raci,
                              Duration= project.Duration,
                              Status=status.Status
                          };
            return Ok(details);
        }
        [HttpDelete("delete")]
        public IActionResult DeleteProjectDetails(int projectId)
        {
            var details = PMDContext.ProjectDetailsTable.FirstOrDefault(x => x.Id == projectId);
            if (details != null)
            {
                details.IsDeleted = true;
                PMDContext.Update(details);
                PMDContext.SaveChanges();
            }
            return Ok(details);
        }
        [HttpPut]
        public IActionResult UpdateProjectDetails(ProjectDetails details)
        {
            var detail = PMDContext.ProjectDetailsTable.Find(details.Id);
            if(detail != null)
            {
                detail.ProjectName = details.ProjectName;
                detail.StartDate = details.StartDate;
                detail.EndDate = details.EndDate;
                detail.Duration = details.Duration;
                detail.Raci = details.Raci;
                PMDContext.Update(detail); 
                PMDContext.SaveChanges();
            }

            return Ok(detail);

        }
    }
}
