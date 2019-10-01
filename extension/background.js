chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://sci-hub.se/"
		});
	});
});

function searchTextOnSciHub(doi){
	var myQuery = encodeURI('https://sci-hub.se/' + doi.selectionText);
	chrome.tabs.create({
		url: myQuery
	});
}

chrome.contextMenus.create({
	title: 'Open DOI: %s on Sci-Hub',
	contexts: ['selection'],
	onclick: searchTextOnSciHub
});