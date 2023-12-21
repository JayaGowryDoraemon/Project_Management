using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project_management.DatabaseContext;
using project_management.Model;

namespace project_management.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserDetailController : ControllerBase
    {
        private readonly ProjectManagementDbContext PMDbContext;
        public UserDetailController(ProjectManagementDbContext pmdbcontext)
        {
            this.PMDbContext = pmdbcontext;
        }
        [HttpGet]
        public IActionResult GetUserDetails()
        {
            var details = PMDbContext.UsersDetailsTable.ToList();
            return Ok(details);
        }
        [HttpPost]
        public IActionResult CreateUserDetails(UserDetails details)
        {
            var getdetails = PMDbContext.UsersDetailsTable.Where(x=>x.UserName== details.UserName);
            if (getdetails != null) {
                return BadRequest();
            }
            else
            {
                PMDbContext.UsersDetailsTable.Add(details);
                PMDbContext.SaveChanges();
                return Ok(details);
            }
            
        }
        [HttpPost("authenication")]
        public bool Authentication(UserDetails details)
        {
            var getdetails = PMDbContext.UsersDetailsTable.Where(x=>x.UserName== details.UserName && x.Password==details.Password);
            if(getdetails != null)
            {
                return true;
            }
            else { return false; }
        }
      
    }
}
