chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://mg.scihub.ltd/"
		});
	});
});

function searchTextOnSciHub(doi){
	var myQuery = encodeURI('https://mg.scihub.ltd/' + doi.selectionText.trim());
	chrome.tabs.create({
		url: myQuery
	});
}

chrome.contextMenus.create({
	title: 'Open DOI: %s on Sci-Hub',
	contexts: ['selection'],
	onclick: searchTextOnSciHub
});