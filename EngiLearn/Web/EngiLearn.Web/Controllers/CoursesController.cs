namespace EngiLearn.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class CoursesController : BaseController
    {
        public IActionResult All()
        {
            return this.View();
        }

        public IActionResult Course()
        {
            return this.View();
        }

        public IActionResult MyCourses()
        {
            return this.View();
        }
    }
}
