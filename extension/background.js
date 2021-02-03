chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    function (tab) {
      chrome.tabs.create({
        url: localStorage.sciHubUrl || "https://sci-hub.do/",
      });
    }
  );
});

function searchTextOnSciHub(doi) {
  var replaces = [
    "https://doi.org/",
    "http://doi.org/",
    "doi.org/",
    "oi.org/",
    "i.org/",
    ".org/",
    "DOI: ",
    "DOI:",
    "DOI",
  ];
  doiText = doi.selectionText.trim();
  for (var i = 0; i < replaces.length; i++) {
    doiText = doiText.replace(replaces[i], "");
  }
  // https://mg.scihub.ltd/10.1126/science.aax3872
  var url = localStorage.sciHubUrl || "https://sci-hub.do/";
  var myQuery = encodeURI(url + doiText.trim());
  chrome.tabs.create({
    url: myQuery,
  });
}

chrome.contextMenus.create({
  title: "Open DOI: %s on Sci-Hub",
  contexts: ["selection"],
  onclick: searchTextOnSciHub,
});
