namespace EngiLearn.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class PaymentsController : Controller
    {
        public IActionResult Calculate()
        {
            return this.View();
        }
    }
}
