chrome.webRequest.onBeforeRequest.addListener( 
	function (details) {
		return redirectOnMatch(details);
	}, { 
		urls: ["https://*.wikipedia.org/*"] 
	},
	["blocking"]
);

var lastRequestId;
var redirectOnMatch = function (request) {
	if (request.requestId !== lastRequestId) {
		lastRequestId = request.requestId;
		return {
			redirectUrl: request.url.replace(".wikipedia.org", ".0wikipedia.org")
		};
	}
};