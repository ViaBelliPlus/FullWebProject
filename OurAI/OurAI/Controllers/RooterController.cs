using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Protocol;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace OurAI.Controllers
{
     
    [Route("api/[controller]")]
    [ApiController]
    public class RooterController : ControllerBase
    {
        [HttpGet("[action]/{state}/{number}")]
        public  async Task<IActionResult> AI2([FromRoute]States state,[FromRoute] int number)
        {
           Response.Headers.Add("Access-Control-Allow-Origin", "*");
           Response.Headers.Add("Access-Control-Allow-Credentials", "true");
           if (state == States.finish)
           {
               AI.Instance = null;
           }
           if (state != States.first && state != States.finish)
           { 
               AI.Instance.Divide(ref AI.Instance.numbers,AI.Instance.Find(AI.Instance.Values,number),state);
               AI.Instance.ClearValues();
           }
           
           if (state != States.finish)
           {
               AI.Instance.Calculate(AI.Instance.numbers);
               AI.Instance.Sort(ref AI.Instance.Values);
           
               List<(int, int)> tupleList = AI.Instance.Send(AI.Instance.Values);
               return Ok(tupleList.ToJson());
           }

           return Ok();
        }
    }
}
