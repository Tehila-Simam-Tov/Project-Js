const myLoud = () => {
      //חילוץ מידע מהסשן

      let nameUser = sessionStorage.getItem("curent_user_name")
      if (nameUser == null) {
            alert("אתה מועבר לעמוד הירשמות")

            window.location = "./register.html"
      }
      



}
const checkPas = () => {
      debugger
      let Password = parseInt(sessionStorage.getItem("curent_usr_pass"))//.value
      let pasInput = parseInt(document.querySelector('#pasInput').value)
      let nameInput = document.querySelector('#nameInput').value
      let name1 = sessionStorage.getItem("curent_user_name")
           
      if (name1 != nameInput || Password != pasInput ) {
            if (name1 != nameInput)
                  alert("שם שגוי נסה שנית");
            else
                  alert("הסיסמא שגויה נסה שנית");
      }

      else {
            sessionStorage.setItem("codeConnect2", nameInput);
            sessionStorage.setItem("codeConnect", pasInput);
            alert("התחברת בהצלחה!!!!")
      }
}




