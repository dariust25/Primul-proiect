var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var img = document.querySelector("img")

var asteptari = document.getElementById("asteptari")  

var body = document.querySelector("body")

button.addEventListener("click", altaViata)

function altaViata() {
nume.innerHTML = "Sofware Developer"
prenume.innerHTML = "Microsoft"
asteptari.innerHTML = "<ul><li>Libertate financiare</li><li>Independenta</li> </ul>"
img.src = "images/r.jpg"
img.style.opacity= "70%"
img.style.width = "300px"
img.style.height = "200px"

}
