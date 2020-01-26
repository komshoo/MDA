var mbox = document.getElementsByClassName('message-box');

var form = document.getElementById('contactme');
// Ime i prezime- sva malaa slova, ime odvojeno od przimena znakom - . Prezime moze da sadrzi vise reci razdvojenih razmakom. 
// Ne sme sadarzati brojeve, specijalne karaktere i velika slova
var validation_messages = [ 'Ime mora sadrzati sve mala slva i ime mora biti odvojeno od prezimena znakom -.',
                            `E-mail adresa mora pocinje znakom !, nakon cega se mora javiti bar jedno malo slovo, a nakon toga,
                            mogu biti dva specijalna karaktera ili cifre. Nakon toga sve od znaka @ moraju biti mala slova. Ostali deo je standardni`,`
                            Poruka mora sadrzati do 500 karaktera. Kombinacija mali i velikikh slova i znakova interpunkcije. Ne sm da sadrzi znak ' ili = `];

form.addEventListener('submit',function (event){
    event.preventDefault()

    var ime_prezime = form.imeprezime
    var email = form.email
    var poruka = form.poruka
    
    var validateIme = /[a-z]{3,}-[a-z ]{3,}/gm;
    var validateEmail =  /^![a-z]+[0-9!@#\$%\^\&*\)\(+=._-]{0,2}@([a-z]+\.)+[a-z]+/gm;
    var validateMessage = /[a-zA-Z!\"\"@#\$%\^\&*\)\(+._\- ]{1,500}/gm;
    var state = true;
    if(!validateIme.test(ime_prezime.value)){
        mbox[0].innerHTML=validation_messages[0];
        state=false;
    }else{
        mbox[0].innerHTML='';
    }
    console.log(email.value.match(validateEmail))
    if(email.value.match(validateEmail)==null || !email.value.match(validateEmail).includes(email.value))
    {
       mbox[1].innerHTML=validation_messages[1];
       console.log('email')
       state=false;
    }else{
        mbox[1].innerHTML='';
    }
    if(poruka.value.match(validateMessage)==null || !poruka.value.match(validateMessage).includes(poruka.value)){
        state=false;
        console.log('poy')
        mbox[2].innerHTML=validation_messages[2];
    }else{
        mbox[2].innerHTML='';
    }
    if(state){
        console.log(state)
        // redirect to new page
        window.location.href = '../uspesno/uspesno.html';
    }
})