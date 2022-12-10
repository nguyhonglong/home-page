using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace bootstraps
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "",
                defaults: new { controller = "Home", action = "Home", id = UrlParameter.Optional }
            );


            routes.MapRoute(
                name: "home",
                url: "trang-chu",
                defaults: new { controller = "Home", action = "Home", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "contact",
                url: "lien-lac",
                defaults: new { controller = "Home", action = "Contact"}
            );

            routes.MapRoute(
                name: "cart",
                url: "cart",
                defaults: new { controller = "Home", action = "Cart" }
            );

            routes.MapRoute(
                 name: "bao-hanh",
                 url: "bao-hanh",
                 defaults: new { controller = "Home", action = "Baohanh" }
);
        }
    }
}
