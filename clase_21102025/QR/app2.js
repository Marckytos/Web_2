function generarQR(){

let input1 = document.getElementById('input1').value.trim();
let input2 = document.getElementById('input2').value.trim();
let input3 = document.getElementById('input3').value.trim();
let input4 = document.getElementById('input4').value.trim();

let textoCompleto = input1 + " " + input2 + " " + input3 + " " + input4;

if(textoCompleto === ""){
    alert("Ingresa al menos un texto para generar el QR")
}

let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(textoCompleto);


let qrImg = document.createElement('img');
qrImg.src=qrCodeURL;
qrImg.alt="Un codigo QR"


qrImg.classList.add('qr-code');

// 🔹 Limpia el contenedor antes de agregar el nuevo QR
    const contenedor = document.getElementById('qr-code');
    contenedor.innerHTML = "";
    contenedor.appendChild(qrImg);

}


