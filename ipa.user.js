// ==UserScript==
// @name     IPA Webarchive Extension
// @description IPAのサイトにアクセスし、404が返された際にウェブアーカイブのサイト(https://warp.ndl.go.jp/info:ndljp/pid/12446699/)にリダイレクトしてくれます。
// @author  mono0218
// @grant         GM_xmlhttpRequest
// @match    https://www.ipa.go.jp/*
// @version  1
// ==/UserScript==

(function(){
    GM_xmlhttpRequest({
        method: "GET",
        url: location.href,
        headers: {
            "Content-Type": "application/json"
        },
        onload: function(response) {
            if(response.status == 404){
                const url = location.href.replace("https://", "");
                location.replace("https://warp.ndl.go.jp/info:ndljp/pid/12446699/" + url);
            }
        },
    });
  })();