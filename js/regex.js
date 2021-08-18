
/*const btn_valida_nome = document.querySelector("#btn_valida_nome")
const btn_valida_email = document.querySelector("#btn_valida_email")*/

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const CPF = document.getElementById("CPF")

nome.addEventListener("blur", function validaNome(){
    const regexNome = /^(([A-Z]{1})([a-z]+) ([A-Z]{1})([a-z]+))$/

    if(!regexNome.test(nome.value)){
        nome.classList.add("error")
        nome.classList.remove("valido")
    }else{
        nome.classList.add("valido")
        nome.classList.remove("error")
    }
})


email.addEventListener("blur", function validaEmail(){
    const regexEmail = /^([a-z]+@[a-z\.]+[\.]br{1})/

    if(!regexEmail.test(email.value)){
        email.classList.add("error")
        email.classList.remove("valido")
    }else{
        email.classList.add("valido")
        email.classList.remove("error")
    }
})


senha.addEventListener("blur", function validaSenha(){
    const regexSenha = /(^([a-z]?)(?=.*[A-Z])(?=.*[0-9])).{8}$/

    if(!regexSenha.test(senha.value)){
        senha.classList.add("error")
        senha.classList.remove("valido")
    }else{
        senha.classList.add("valido")
        senha.classList.remove("error")
    }
})


CPF.addEventListener("blur", function validaCPF(){
    const regexCPF = /(([0-9]{3}).){2}([0-9]{3})-([0-9]{2})$/

    if(!regexCPF.test(CPF.value)){
        CPF.classList.add("error")
        CPF.classList.remove("valido")
    }else{
        CPF.classList.add("valido")
        CPF.classList.remove("error")
    }
})


fone.addEventListener("blur", function validaFone(){
    const regexFone = /((\(([0-9]{2})\)) 9([0-9]{4})(-{0,1})([0-9]{4}))|(([0-9]{2}) 9([0-9]{4})([0-9]{4}))/

    if(!regexFone.test(fone.value)){
        fone.classList.add("error")
        fone.classList.remove("valido")
    }else{
        fone.classList.add("valido")
        fone.classList.remove("error")
    }
})


dataHora.addEventListener("blur", function validaDataHora(){
    const regexDataHora = /(([0-9]{2})\/){2}([0-9]{4}) (([0-9]{2}):){2}([0-9]{2})$/

    if(!regexDataHora.test(dataHora.value)){
        dataHora.classList.add("error")
        dataHora.classList.remove("valido")
    }else{
        dataHora.classList.add("valido")
        dataHora.classList.remove("error")
    }
})

numReal.addEventListener("blur", function validaNumReal(){
    const regexNumReal = /^[-+]?[0-9]+$|^[-+]?[0-9]+\.?[0-9]+$/

    if(!regexNumReal.test(numReal.value)){
        numReal.classList.add("error")
        numReal.classList.remove("valido")
    }else{
        numReal.classList.add("valido")
        numReal.classList.remove("error")
    }
})
