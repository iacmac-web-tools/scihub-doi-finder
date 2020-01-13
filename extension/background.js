chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://sci-hub.tw/"
		});
	});
});

function searchTextOnSciHub(doi){
	// https://mg.scihub.ltd/10.1126/science.aax3872
	var myQuery = encodeURI('https://sci-hub.tw/' + doi.selectionText.trim());
	chrome.tabs.create({
		url: myQuery
	});
}

chrome.contextMenus.create({
	title: 'Open DOI: %s on Sci-Hub',
	contexts: ['selection'],
	onclick: searchTextOnSciHub
});