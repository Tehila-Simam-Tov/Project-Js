
let login = document.createElement('h1')
let div=document.getElementById('div')
div.append(login)
login.innerHTML = "הרשמה:"
let user = document.createElement('h3')
let name1 = document.createElement('input');
div.append(user, name1)
name1.type = "text"
name1.placeholder = "שם:"
name1.id="name"
name1.required
user.innerText = "שם משתמש:"
let password = document.createElement('h3')
let pass = document.createElement('input');
div.append(password, pass)
pass.type = "password"
pass.placeholder = ":ת.ז"
pass.id="identify"
pass.required
password.innerText = "תעודת זהות:"
let text2 = document.createElement('h3')
let phone = document.createElement('input');
div.append(text2, phone)
phone.type = "tel"
phone.id="phone"
phone.placeholder = "פלאפון:"
phone.required
text2.innerText = "הכנס מספר פלאפון:"
let text3 = document.createElement('h3')
let mail = document.createElement('input');
div.append(text3, mail)
mail.type = "email"
mail.placeholder = "מייל:"
mail.id="mail"
mail.required
text3.innerText = "הכנס כתובת מייל:"
div.innerHTML += `<br/> <br/> <button type="button" id="ok" onclick="send()">אישור</button>`
function send() {
    debugger
    firstName=document.getElementById('name').value
    identify=document.getElementById('identify').value
    telephone=document.getElementById('phone').value
    email=document.getElementById('mail').value
    if(firstName=="" ){
        alert("שגיאה,הכנס שם משתמש") 
    }
    else if(identify.length!=9){
        alert("שגיאה,הכנס שוב ת.ז")
    }
    else if(telephone.length!=10){
        alert("שגיאה,הכנס שוב מספר פאלפון")
    }
    //לך לשמור בסשן
    else{
        sessionStorage.setItem("curent_user_name", firstName)
        sessionStorage.setItem("curent_usr_pass", parseInt(identify))
        sessionStorage.setItem("curent_usr_phone",parseInt(telephone))
        sessionStorage.setItem("curent_usr_mail", JSON.stringify(email))
    
        alert(`שלום ${firstName}  נרשמת בהצלחה`)
}
   
}