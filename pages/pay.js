let nameUser=sessionStorage.getItem("curent_user_name")
let passUser= sessionStorage.getItem("codeConnect");


     if(nameUser=="")
     {
          alert("אתה מועבר להירשמות")
           window.location="./register.html"
     }
     
 
 else if(passUser==null){
     alert("אתה מועבר להתחברות")
     window.location="./conect.html"
 }
 

     let totalSum = sessionStorage.getItem("curent_sumFinish")
      parseInt(totalSum)
      let from1=document.getElementById('from')
      
      let btnSum=document.createElement('h3')
      
      from1.append(btnSum)
      btnSum.innerText=totalSum
     
     //בדיקה נתוני כרטיס אשראי
  const chekcard=()=>{
     
     let inputName=document.querySelector('#cardHolderName').value
     let pass=document.querySelector('#password').value
     let cardNumber=document.querySelector('#cardNumber').value
     let expiryDate=document.querySelector('#expiryDate').value
     let cvv=document.querySelector('#cvv').value
     let cardHolderName=document.querySelector('#cardHolderName').value
          
     if(nameUser!=inputName){
          alert("שם שגוי,נסה שנית")
     }
     else if(passUser!=pass){
          alert("סיסמא שגויה,נסה שנית")

     }
     else if(cardNumber.length!=16)
          alert("שגיאה הכנס שוב מספר כרטיס אשראי")
     else if(expiryDate=="")
          alert("שגיאה,הכנס תוקף")
     else{
          if(cvv.length!=3)
               alert("שגיאה הכנס שוב 3 ספרות בגב הכרטיס")
          else{
               alert(`התשלום בוצע בהצלחה סכום לתשלום  ${totalSum}`)
          }
     }
 
 
  }   