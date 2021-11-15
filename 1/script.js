
let email = "mail@example.com"
let pin = "yuptech1234"

function Gonder() {
    let divv = document.getElementById("show")
    let pass = document.getElementById("pass")

    let mail = document.getElementById("Email").value;
    let code=document.getElementById("Password").value;

    divv.innerHTML= "Sizin emaliniz :"  + mail;
    pass.innerHTML = "Sizin sifreniz :" + code;

}



// let x = prompt("Eded daxil edin")

// let y= prompt("Quvvete yukselecek ededi daxil edin")

// alert(x**y);

