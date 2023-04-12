const buttonsubmit = document.getElementById("submit");
const alertwarning = document.getElementById("warning");
alertwarning.style.display = "none"
const alert = document.getElementById("alert");
alert.style.display = "none"

buttonsubmit.addEventListener("click", function () {
    alert.style.display = "none"
    alertwarning.style.display = "none"
    const pengirim = document.getElementById("txtPengirim");
    const jeniskelamin = document.getElementById("jenisKelamin");
    const pesan = document.getElementById("txtPesan");
    const result = document.getElementById("txtResultPesan");

    if (pengirim.value === "") {
        alertwarning.innerHTML = "nama pengirim tidak boleh kosong"
        alertwarning.style.display = "block"
        pengirim.focus()
        return 0;
    }

    if (jeniskelamin.value === "default") {
        alertwarning.innerHTML = "jenis kelamin tidak boleh kosong"
        alertwarning.style.display = "block"
        jeniskelamin.focus()
        return 0;
    }

    if (pesan.value === "") {
        alertwarning.innerHTML = "pesan tidak boleh kosong"
        alertwarning.style.display = "block"
        pesan.focus()
        return 0;
    }

    const resulttext = `
    Nama : ${pengirim.value}
    Jenis Kelamin : ${jeniskelamin.value}
    Pesan : ${pesan.value}
    `;
    result.value += resulttext;
    alert.style.display = "block"
})


