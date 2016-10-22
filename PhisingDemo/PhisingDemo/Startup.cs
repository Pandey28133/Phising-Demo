using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PhisingDemo.Startup))]
namespace PhisingDemo
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
