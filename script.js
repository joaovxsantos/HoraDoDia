let data = new Date()
let hora = data.getHours()
let h2 = document.querySelector("#title2")
let body = document.getElementById("b")
let img = document.getElementsByTagName("img")[0]


h2.innerText = `Agora são ${hora} horas\n`

if (hora < 5) {
    body.style.background = "#3C3E3D"
    img.src = "./images/madrugada.jpg"
    h2.innerText += "Boa madrugada!"
}
else if (hora < 12) {
    h2.innerText += "Bom dia!"
    body.style.background = "#cfbf91"
    img.src = "./images/manha.jpg"

} else if (hora < 18) {
    h2.innerText += "Boa tarde!"
    body.style.background = "#a77965"
    img.src = "./images/tarde.jpg"
} else {
    h2.innerText += "Boa noite!"
    body.style.background = "#3C3E3D"
    img.src = "./images/noite.jpg"
}
