using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SampleApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BigSizeDataController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<ReturnDataModel> GetBigSizeData()
        {
            var retData = Enumerable.Range(1, 100000).Select(x => {
                return new ReturnDataModel()
                {
                    St1 = "1",
                    St2 = "2",
                    St3 = "3",
                    St4 = "4",
                    St5 = "5",
                    St6 = "6",
                    St7 = "7",
                    St8 = "8",
                    St9 = "9",
                    St10 = "10",
                    St11 = "11",
                    St12 = "12",
                    St13 = "13",
                    St14 = "14",
                    St15 = "15",
                    St16 = "16",
                    St17 = "17",
                    St18 = "18",
                    St19 = "19",
                    St20 = "20",
                    St21 = "21",
                    St22 = "22",
                    St23 = "23",
                    St24 = "24",
                    St25 = "25",
                    St26 = "26",
                    St27 = "27",
                    St28 = "28",
                    St29 = "29",
                    St30 = "30",
                    St31 = "31",
                    St32 = "32",
                    St33 = "33",
                    St34 = "34",
                    St35 = "35",
                    St36 = "36",
                    St37 = "37",
                    St38 = "38",
                    St39 = "39",
                    St40 = "40",
                    St41 = "41",
                    St42 = "42",
                    St43 = "43",
                    St44 = "44",
                    St45 = "45",
                    St46 = "46",
                    St47 = "47",
                    St48 = "48",
                    St49 = "49",
                    St50 = "50"

                };
            });
            return retData;
        }
    }

    public class ReturnDataModel
    {
        public string St1 { get; set; }
        public string St2 { get; set; }
        public string St3 { get; set; }
        public string St4 { get; set; }
        public string St5 { get; set; }
        public string St6 { get; set; }
        public string St7 { get; set; }
        public string St8 { get; set; }
        public string St9 { get; set; }
        public string St10 { get; set; }
        public string St11 { get; set; }
        public string St12 { get; set; }
        public string St13 { get; set; }
        public string St14 { get; set; }
        public string St15 { get; set; }
        public string St16 { get; set; }
        public string St17 { get; set; }
        public string St18 { get; set; }
        public string St19 { get; set; }
        public string St20 { get; set; }
        public string St21 { get; set; }
        public string St22 { get; set; }
        public string St23 { get; set; }
        public string St24 { get; set; }
        public string St25 { get; set; }
        public string St26 { get; set; }
        public string St27 { get; set; }
        public string St28 { get; set; }
        public string St29 { get; set; }
        public string St30 { get; set; }
        public string St31 { get; set; }
        public string St32 { get; set; }
        public string St33 { get; set; }
        public string St34 { get; set; }
        public string St35 { get; set; }
        public string St36 { get; set; }
        public string St37 { get; set; }
        public string St38 { get; set; }
        public string St39 { get; set; }
        public string St40 { get; set; }
        public string St41 { get; set; }
        public string St42 { get; set; }
        public string St43 { get; set; }
        public string St44 { get; set; }
        public string St45 { get; set; }
        public string St46 { get; set; }
        public string St47 { get; set; }
        public string St48 { get; set; }
        public string St49 { get; set; }
        public string St50 { get; set; }

    }
}