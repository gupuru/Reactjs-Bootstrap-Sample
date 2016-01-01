# Reactjs-Bootstrap-Sample

> React.jsとBootstrapを使ったサンプル
http://gupuru.github.io/Reactjs-Bootstrap-Sample/

###bootstarapの導入方法
1.npmで取得 

```
npm install react react-bootstrap --save-dev
```

2.cssを読み込む

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

```

3.必要なComponentsを読み込む

```
var Alert = require('react-bootstrap').Alert;

```

4.使う際にMAIL ERRORが出た場合は

```
ulimit -n 512
```
とかで一時的にしのげる。
永久的にする場合は、この辺りを参考にする。

 - http://qiita.com/castor4bit/items/8d8b245e0698cc38f2a0

 - http://d.hatena.ne.jp/NeoCat/20070218/1180896910

###参考サイト

- http://qiita.com/koba04/items/43200b6fd6e6f43f0d8d

- http://tnakamura.hatenablog.com/entry/2015/12/15/073504

- http://react-bootstrap.github.io/

- http://getbootstrap.com/getting-started/