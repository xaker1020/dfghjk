const btn = document.getElementById("btn1");
const bn = document.getElementById("btn3");
const bt = document.getElementById("btn2");
const notif = document.getElementById("notif")
function showNotif(rang, yozuv) {
    const div = document.createElement("div")
    div.classList.add("not")
    div.innerHTML = `<h1>${yozuv}</h1> <button id="qs">x</button>`;
    div.style.display = "flex"
    div.style.backgroundColor = rang;
    notif.prepend(div);
    setTimeout(() => {
        notif.removeChild(div);
    }, 2000);
}
function del(e) {
    notif.removeChild(e.parentNode)
}