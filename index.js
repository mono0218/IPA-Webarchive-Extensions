chrome.webRequest.onCompleted.addListener(function (headers){
        if (headers.documentId == undefined && headers.statusCode == 404) {
            _url = headers.url.replace("https://", "");
            const url = "https://warp.ndl.go.jp/info:ndljp/pid/12446699/"+_url;
            chrome.tabs.create({url: url });
        }
},

{urls: ["*://*.www.ipa.go.jp/*"]}
);