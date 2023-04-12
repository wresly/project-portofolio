const buttonsubmit = document.getElementById("submit");
const alert = document.getElementById("alert");
alert.style.display = "none"

buttonsubmit.addEventListener("click", function () {
    const pengirim = document.getElementById("txtPengirim").value;
    const jeniskelamin = document.getElementById("jenisKelamin").value;
    const pesan = document.getElementById("txtPesan").value;
    const result = document.getElementById("txtResultPesan");

    const resulttext = `
    Nama: ${pengirim}
    Jenis Kelamin: ${jeniskelamin}
    Pesan: ${pesan}
    `;
    result.value += resulttext;
    alert.style.display = "block"
})


