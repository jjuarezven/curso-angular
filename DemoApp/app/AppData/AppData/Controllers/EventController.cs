using System.IO;
using System.Web.Hosting;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
	public class EventController : ApiController
	{

		string path = HostingEnvironment.MapPath("/");

		public JToken Get(string id = null)
		{			
			return JObject.Parse(File.ReadAllText(string.Concat(path, "../app/data/event/", id, ".json")));
		}

		public void Post(string id, JObject eventData)
		{
			File.WriteAllText(string.Concat(path, "../app/data/event/", id, ".json"), eventData.ToString(Formatting.None));
		}
	}
}
