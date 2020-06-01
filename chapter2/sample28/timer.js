let timer = () => {
  let now = new Date();
  document.getElementById("timer").innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

}

let timerID = setInterval(timer, 500);
// setInterval = やりたい処理と秒数を指定することでどれ程の間隔で実行するかを指定できる

// clearInterval(timerID); やりたい処理を終了させる