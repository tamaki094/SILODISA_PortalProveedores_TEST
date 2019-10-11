using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SILODISA_PortalProveedores_TEST.Startup))]
namespace SILODISA_PortalProveedores_TEST
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
