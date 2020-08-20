var quotes = [
    'The way get started is to quit talking and begin doing. -Walt Disney',
    'It does not matter how slowly you go as long as you do not stop. -Confucius',
    'All our dreams can come true, if we have the courage to pursue them. -Walt Disney',
    'I never dreamed about success, I worked for it. -Estée Lauder',
    'Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult -Avul Pacir Zainulabidin Abdul Kalam',
    'There is nothing more powerful in the world than the idea that came in time. -Victor Hugo',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit. -Aristotle',
    'Never bend your head. Always hold it high. Look the world straight in the eye. -Helen Keller',
    'Begin to be now what you will be hereafter. -William James',
    'Setting goals is the first step in turning the invisible into the visible. -Tony Robbins'
]
function newQuote() {
    var randomNumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];    
}
function red() {
  document.getElementById("quoteDisplay").style.backgroundColor = "red";
}
function green() {
  document.getElementById("quoteDisplay").style.backgroundColor = "green";
}
function yellow() {
  document.getElementById("quoteDisplay").style.backgroundColor = "yellow";
}
function violet() {
  document.getElementById("quoteDisplay").style.backgroundColor = "violet";
}


var cnt = 0;
function fnc_clr(id001){
    cnt = 0;
    document.getElementById(id001).value = "";
}
function fnc_case(idx){
    var txt = document.getElementById(idx).value;
    if(cnt % 2 == 0){
        document.getElementById(idx).value = txt.toUpperCase();
    }
    else{
        document.getElementById(idx).value = txt.toLowerCase();
    }
    cnt++;
};
function fnc_sort(idx){
    var tx = document.getElementById(idx).value;
    var tx1 = tx.split("\n");
    tx1.sort();
    document.getElementById(idx).value = tx1.join("\n");
};
function fnc_rev(idx){
    var tx = document.getElementById(idx).value;
    var tx1 = tx.split("\n");
    for(let i = 0; i < tx1.length; i++){
        let st1 = tx1[i].split("");
        st1.reverse();
        tx1[i] = st1.join("");
    }
    document.getElementById(idx).value = tx1.join("\n");
};
function fnc_bnk(idx){
    var tx = document.getElementById(idx).value;
    var tx1 = tx.split("\n");
    for(let i = 0; i < tx1.length; i++){
        let st1 = tx1[i].split(" ");
        tx1[i] = st1.join("");
    }
    document.getElementById(idx).value = tx1.join("\n");
};
function fnc_add(idx){
    var tx = document.getElementById(idx).value;
    var tx1 = tx.split("\n");
    for(let i = 0; i < tx1.length; i++){
        tx1[i] = (i + 1) + " " + tx1[i];
    }
    document.getElementById(idx).value = tx1.join("\n");
};
function fnc_ran(idx){
    var tx = document.getElementById(idx).value;
    var tx1 = tx.split("\n");
    for(let i = 0; i < tx1.length; i++){
        let idx = Math.floor(Math.random() * (tx1.length));
        let tem = tx1[i];
        tx1[i] = tx1[idx];
        tx1[idx] = tem;
    }
    document.getElementById(idx).value = tx1.join("\n");
};