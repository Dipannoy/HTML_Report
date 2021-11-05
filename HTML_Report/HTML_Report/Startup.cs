using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HTML_Report.Startup))]
namespace HTML_Report
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
