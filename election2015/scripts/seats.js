
function doStuff(data) {


		$.each(data, function(i){


			if (i == data.length -1)
					null

			else
  				$("#polltablebody").append("<tr class=\"" + data[i].party + "\" style=\"opacity: 0.9;\"><td style=\"text-align: left;\">" + data[i].seat + "</td><td>" +
          regionlist[data[i].area] + "</td><td style=\"text-align: left;\">" + partylist[data[i].incumbent] + "</td><td>" + partylist[data[i].party] + "</td><td>" + data[i].change +
          "</td><td>" + (data[i].conservative).toFixed(2) +
          "</td><td>" + (data[i].labour).toFixed(2) +
          "</td><td>" + (data[i].libdems).toFixed(2) +
          "</td><td>" + (data[i].ukip).toFixed(2) +
          "</td><td>" + (data[i].green).toFixed(2) +
          "</td><td>" + (data[i].snp).toFixed(2) +
          "</td><td>" + (data[i].plaidcymru).toFixed(2)+
          "</td><td>" + (data[i].other).toFixed(2) +
          "</td><td>" + (data[i].sdlp).toFixed(2) +
          "</td><td>" + (data[i].sinnfein).toFixed(2) +
          "</td><td>" + (data[i].alliance).toFixed(2) +
          "</td><td>" + (data[i].dup).toFixed(2) +
          "</td><td>" + (data[i].uu).toFixed(2) +
          "</td></tr>")
		})


		$("#polltable").tablesorter({
      sortInitialOrder: "asc",
      headers: {
				4: { sortInitialOrder: 'desc' },
        5: { sortInitialOrder: 'desc' },
        6: { sortInitialOrder: 'desc' },
        7: { sortInitialOrder: 'desc' },
        8: { sortInitialOrder: 'desc' },
        9: { sortInitialOrder: 'desc' },
        10: { sortInitialOrder: 'desc' },
        11: { sortInitialOrder: 'desc' },
        12: { sortInitialOrder: 'desc' },
        13: { sortInitialOrder: 'desc' },
        14: { sortInitialOrder: 'desc' },
        15: { sortInitialOrder: 'desc' },
        16: { sortInitialOrder: 'desc' },
        17: { sortInitialOrder: 'desc' }

    },
			sortList:[[0,0]]

		});
};



function parseData(url, callBack) {
	Papa.parse(url, {
		download: true,
		header: true,
		dynamicTyping: true,
		complete: function(results) {
			callBack(results.data);
		}
	});
}
parseData("/election2015/data/info.csv", doStuff);
