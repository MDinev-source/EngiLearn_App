using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(EngiLearn.Web.Areas.Identity.IdentityHostingStartup))]

namespace EngiLearn.Web.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
            });
        }
    }
}
