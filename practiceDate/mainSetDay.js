let thisH1 = document.getElementsByTagName("h1")[0];
let currentime = new Date();
currentime.setMonth(1);
thisH1.innerHTML = currentime;

// 可以使用setDate方法 把原本的天數改掉
