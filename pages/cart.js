//יצירת טבלה

let mainDiv = document.getElementById('table');
let mytable = document.createElement('table')
mytable.className='table'

mainDiv.append(mytable)
let thead = document.createElement('thead');
let row1 = document.createElement('tr')
mytable.append(thead)
thead.append(row1)
let tbody = document.createElement('tbody');
mytable.append(tbody)

let th0 = document.createElement('th')
let th1 = document.createElement('th')
let th2 = document.createElement('th')
let th3 = document.createElement('th')
let th4 = document.createElement('th')
let th5 = document.createElement('th')
let th6= document.createElement('th')

row1.append(th6,th5,th4,th3,th2,th1,th0);
thead.append(row1)
th0.innerText = "קוד ";
th0.scope="col"
th1.innerText = "שם";
th1.scope="col"
th2.innerText = "תמונה";
th2.scope="col"
th3.innerText = "מחיר";
th3.scope="col"
th4.innerText = "כמות";
th4.scope="col"
th5.innerText = 'סה"כ';
th5.scope="col"
th6.innerText = 'ביטול';
th6.scope="col"
let tfoot = document.createElement('tfoot');
mytable.append(tfoot)
let row=document.createElement('tr')
tfoot.appendChild(row)
let tdFoot1=document.createElement('td')
tdFoot1.colspan="6"
tdFoot1.className="text-right"
tdFoot1.innerText="סך הכל:"
let tdFoot2=document.createElement('td')
tdFoot2.id="totalPrice"
tdFoot2.innerText="0.00"
row.append(tdFoot1,tdFoot2)
////////////////////////////////

//שליפת נתונים מהסשן ומילוי נתוני הטבלה
const fillCart = () => {
  
  let count2=0
  tbody.remove()
  tbody = document.createElement('tbody')
  let th=document.createElement('th')
  mytable.appendChild(tbody)
  tbody.append(th)
   let str = sessionStorage.getItem("data_sal")
  let table = JSON.parse(str)
  
  for (let i = 0; i < table.length; i++) {
   let row2 = document.createElement('tr')
   th.appendChild(row2)
   th.scope="row"
   th.id='t'
   let td0 = document.createElement('td')
   let td1 = document.createElement('td')
   let td2 = document.createElement('td')
   let td3 = document.createElement('td')
   let td4 = document.createElement('td')
   let td5 = document.createElement('td')
   let td6 = document.createElement('td')
   
    
    row2.append(td6,td5,td4,td3,td2,td1,td0);
    //הוספת פח
    td6.innerHTML=`<button class="btn btn-danger btn-sm" onclick=remove1(${i})>
    <svg  width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
             </button>`
    
    //הוספת כפתורי הוספה והפחתה
    td4.innerHTML=`<button class="button_cart" onclick="plus('${table[i].id}')">+</button> ${table[i].count}<button class="button_cart" onclick="minus('${table[i].id}')">-</button>`
    //נתינת ערכים לתאי הטבלה
    // td0.innerText = `${table[i].id}`
    
    td0.innerText =count2++ 
    td1.innerText = `${table[i].item}`
    let img = document.createElement('img')
    td2.append(img)
    img.classList.add('cartImg') 
    img.src = `${table[i].src}`
    //img.src.style.width='2vw';
    td3.innerText = `${table[i].price}`
    td5.innerText=`${table[i].sum}`
     tbody.append(row2)
    
  }
    let sumFinish=0;
  for(let i=0;i<table.length;i++){
      sumFinish+=table[i].sum;
  }
  tdFoot2.innerText=sumFinish
  sessionStorage.setItem("curent_sumFinish", sumFinish)
  
}
//פונקציה להוספת כמות
const plus = (myid) => {
   let str = sessionStorage.getItem("data_sal")
  let table = JSON.parse(str)
  let obj = table.find(x => x.id == myid)
  obj.count++;
    obj.sum+=obj.price;
  sessionStorage.setItem("data_sal", JSON.stringify(table));
  fillCart()
}

//פונקציה להורדת כמות
const minus = (myid) => {
  let str = sessionStorage.getItem("data_sal")
  let table = JSON.parse(str)
  let obj =table.find(x => x.id == myid)
  if(obj.count>1){
    obj.count--;
     obj.sum-=obj.price

  }
  else{
    let i = 0;
    for (i = 0; i < table.length; i++) {
      if (table[i].id == myid) {
        JSON.table
        table.splice(i, 1)
        sessionStorage.setItem("data_sal", JSON.stringify(table));
        fillCart()
        break;
      }
    }

  }
    sessionStorage.setItem("data_sal", JSON.stringify(table));
  fillCart()
}
//פונקצית מחיקת מוצר
const remove1 = (i) => {
    let str = sessionStorage.getItem("data_sal")
  let table = JSON.parse(str)
  
  table.splice(i,1)
  sessionStorage.setItem("data_sal",JSON.stringify(table));
  fillCart()
}
//הוספת כפתור לתשלום
let btnPay=document.createElement('button')
btnPay.innerHTML=`<a href="./pay.html"> לתשלום</a>`
mainDiv.append(btnPay)