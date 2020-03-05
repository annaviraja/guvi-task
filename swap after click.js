var div = document.createElement("div");
var div2 = document.createElement("div");
document.body.appendChild(div);
document.body.appendChild(div2);
div.textcontent="i am div"
div2.textcontent="i am div2"
var btn = document.createElement("button");
btn.textcontent="clicktoswap"
document.boody.appendChild(btn);
btn.addEventListener("click",changetext);
function changetext() {
    let a=div.textcontent;
    let b=div2.textcontent;
    div.textcontent=b;
    div2.textcontent=a;
}