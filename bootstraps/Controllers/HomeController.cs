using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace bootstraps.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Home()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Baohanh()
        {
            

            return View();
        }
    }
}