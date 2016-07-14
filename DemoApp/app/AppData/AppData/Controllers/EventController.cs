using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Text;
using System.Web.Hosting;
using System.Web.Http;

namespace AppData.Controllers
{
	public class EventController : ApiController
	{
		readonly string path = HostingEnvironment.MapPath("/");

		public JToken Get(string id = null)
		{
			if (id == null)
			{
				return GetAllJsonEventsAsArray();
			}
			return GetSingleJsonFile(id);
		}

		private JToken GetSingleJsonFile(string id)
		{
			return JObject.Parse(File.ReadAllText(string.Concat(path, "../AppData/data/event/", id, ".json")));
		}

		public void Post(string id, JObject eventData)
		{
			File.WriteAllText(string.Concat(path, "../AppData/data/event/", id, ".json"), eventData.ToString(Formatting.None));
		}

		private JArray GetAllJsonEventsAsArray()
		{
			var contents = string.Empty;
			var builder = new StringBuilder();
			builder.Append(contents);
			foreach (var file in Directory.GetFiles(string.Concat(path, "../AppData/data/event/")))
			{
				builder.Append(string.Concat(File.ReadAllText(file), ","));
			}
			contents = builder.ToString();
			return JArray.Parse(string.Concat("[", contents.Substring(0, contents.Length - 1), "]"));
		}
	}
}
