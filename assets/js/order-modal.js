
const funShowOm = () => {
  const someElem = document.getElementById('m-map') //твой айдишник
  someElem.classList.add("vis") //класс показывающий модалку (css)
}

const funHideOm = () => {
  const someElem = document.getElementById('m-map') //твой айдишник
  someElem.classList.remove("vis") //класс скрывающий модалку (css)
}
document.getElementById("show-m-m").addEventListener("click", funShowOm);
document.getElementById("close-m-m").addEventListener("click", funHideOm);