# IPA-Webarchive-Extensions
- IPAのサイトにアクセスし、404が返された際に[ウェブアーカイブサイト(Warp)](https://warp.ndl.go.jp/info:ndljp/pid/12446699/){:target="_blank"}にリダイレクトしてくれます。

## 使い方
### chrome拡張機能をそのまま導入する。
1. このリポジトリをクローンする
2. Chromeの拡張機能のページを開く
3. 右上のデベロッパーモードをオンにする
4. パッケージ化されていない拡張機能を読み込むをクリック
5. このリポジトリのchrome-extensionを選択
6. IPAのサイトにアクセスすると、404が返された際にウェブアーカイブのサイトにリダイレクトしてくれます。

### user scriptを使用する。
1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja){:target="_blank"}をインストールする
2. [このリンク](https://github.com/mono0218/IPA-Webarchive-Extensions/releases/download/v1.0.0/ipa.user.js)からダウンロードして有効化する。
3. IPAのサイトにアクセスすると、404が返された際にウェブアーカイブのサイトにリダイレクトしてくれます

## その他

ちなみに使い方の文章は、ほとんどgithub copilotが書いてくれました。びっくりです。
