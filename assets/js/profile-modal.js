
const funShow = () => {	
	funHide1();
  const someElem = document.getElementById('sign-in-m') //твой айдишник
  someElem.classList.add("vis") //класс показывающий модалку (css)
}

const funHide = () => {
  const someElem = document.getElementById('sign-in-m') //твой айдишник
  someElem.classList.remove("vis") //класс скрывающий модалку (css)
}

const funShow1 = () => {
	funHide();
  const someElem = document.getElementById('sign-up-m') //твой айдишник
  someElem.classList.add("vis") //класс показывающий модалку (css)
}

const funHide1 = () => {

  const someElem = document.getElementById('sign-up-m') //твой айдишник
  someElem.classList.remove("vis") //класс скрывающий модалку (css)
}

const funShow2 = () => {
	funHide();
  const someElem = document.getElementById('restore-m') //твой айдишник
  someElem.classList.add("vis") //класс показывающий модалку (css)
}

const funHide2 = () => {
  const someElem = document.getElementById('restore-m') //твой айдишник
  someElem.classList.remove("vis") //класс скрывающий модалку (css)
}
document.getElementById("profile").addEventListener("click", funShow);
document.getElementById("already-s-u").addEventListener("click", funShow);
document.getElementById("close-s-i-m").addEventListener("click", funHide);

document.getElementById("not-s-u").addEventListener("click", funShow1);
document.getElementById("close-s-u-m").addEventListener("click", funHide1);

document.getElementById("forgot").addEventListener("click", funShow2);
document.getElementById("close-r-m").addEventListener("click", funHide2);
