
const itemsArr = [
    { src: "../images/שולחן-שוק-בשרי.jpg",id:1, item: 'ארוחת גורמה',price:259,count:0,sum:0,sort:"2"},
    { src: '../images/SSGP1875.JPG',id:2, item: 'מרק עוף מרוקאי',price:70,count:'0',sum:0,sort:"1"},
    { src: '../images/SSGP4098.JPG',id:3, item: 'ספגטי',price:45 ,count:'0',sum:0,sort:"1"},
    { src: '../images/אוכל.jpg',id:4, item: 'חזה עוף על מצה עלים',price:100,count:0,sum:'0',sort:"1"},
    { src: '../images/fried-chicken.png',id:13,  item: 'שיפודים על האש',price:120,count:0,sum:'0',sort:"1"},
    { src: '../images/steak.png',id:6,  item: "בשר מעושן",price:250,count:0,sum:0 ,sort:"2"},
    { src: '../images/אוכל (2).jpg',id:7,  item: 'עוף ברוטב ביין עם פרוסות לימון',price:145,count:0 ,sum:'0',sort:"1"},
    { src: '../images/אוכל (3).jpg',id:8,  item: 'בשר על האש עם תוספות',price:300,count:0,sum:0,sort:"2"},
    { src: '../images/בשר (1).jpg',id:9,  item: 'בשר עגל',price:100,count:0,sum:0,sort:"1"},
    { src: '../images/בשר (2).jpg',id:10,  item: 'רולדת בשר נא',price:200,count:0,sum:0,sort:"2"},
    { src: '../images/בשר (5).jpg',id:11,  item: 'בשר שוק',price:250,count:0,sum:0,sort:"2"},
    { src: '../images/SSGP0495.JPG',id:12, item: "צ'יקן מסלא",price:299,count:0,sum:0,sort:"2"},
        
    { src:"../images/chicken-and-waffles-4589759_640.jpg",id:15, item: 'קציצות הודו',price:98,count:0,sum:0,sort:"1"},
    { src: "../images/ea997e407c2e45a2877ec8ea5638b4ec_56.webp",id:16, item: 'צלי בשר בהגשה יחודית',price:243,count:0,sum:0,sort:"2" },
    { src:"../images/snizel (1).jpg",id:17, item: 'כריך',price:299,count:0,sum:0,sort:"1"},
    { src: "../images/איך-לבחור-קייטרינג-בשרי-כשר.jpg",id:19, item: 'תוספות בשריות',price:175,count:0,sum:0,sort:"1"},
    { src: "../images/הטרקלין-768x538.jpg",id:20, item: 'בשרי בניחוח של פעם',price:220,count:0,sum:0,sort:"2"},
    { src: "../images/קייטרינג-בשרי-כשר.jpg",id:21, item: 'אסאדו',price:300,count:0,sum:0,sort:"2"}
   
]

let arrsal=[];

let container = document.querySelector('.container')
//שליפת נתונים מהסשן אם קימים
if(sessionStorage.getItem("data_sal")!=null){
    let str=sessionStorage.getItem("data_sal")
    arrsal=JSON.parse(str)
}
// סינון מחירים נמוכים וגבוהים
const sort_card = (filter)=>{
    let filter1 = itemsArr.filter((item) => item.sort.includes(filter));
    let container = document.querySelector('.container')
    container.remove()
    let container2 = document.createElement('div')
    container2.className ="container"
    let main = document.getElementsByTagName("main")[0]
    main.appendChild(container2)
    filter1.forEach(createCard)
}
//הצגת כל המחירים
const sort_card2 = ()=>{
    let container = document.querySelector('.container')
    container.remove()
    let container2 = document.createElement('div')
    container2.className ="container"
    let main = document.getElementsByTagName("main")[0]
    main.appendChild(container2)
    itemsArr.forEach(createCard)
}
//פונקציה הוספה לסל
const addToCart=(myid)=>{
    
     let obj;
    
     obj=itemsArr.find(item=>item.id==myid)
    
if(obj!=null)
{
    if(arrsal.findIndex(item=>item.id==obj.id)==-1){
        obj.count=1;
        
        obj.sum=obj.price;
       
    }
    let flag=false;
    for(let i=0;i<arrsal.length;i++){
        if(arrsal[i].id==obj.id){
          arrsal[i].count++;
        
          arrsal[i].sum+=obj.price;
          flag=true;          

        }
    }
    if(!flag){
    arrsal.push(obj);
    obj.count=1;
    obj.sum=obj.price;
    }
flag=false;
sessionStorage.clear()
sessionStorage.setItem("data_sal", JSON.stringify(arrsal));
}
} 
 //פונקציה ליצירת כרטיסים
itemsArr.forEach(createCard)
function createCard(item)
{
  
    let container = document.querySelector('.container')
    let card = document.createElement('div');
    let img = document.createElement('img')
    img.src = item.src
    img.className="imgClaas"
    img.style.width = '100%'
    let cardDesc = document.createElement('h3')
    let br=document.createElement('br')
    cardDesc.innerText = `${item["item"]} 
     ${item["price"]}₪`
    
    let button1=document.createElement('button')
    let button2=document.createElement('button')
    card.append(img,cardDesc,button1,button2);
    let icoun=document.createElement('img')
    icoun.src="../איכונים/cart.svg"
button1.innerHTML='הוספה לסל'
button1.appendChild(icoun)
button2.innerHTML=`<a href="./items.html">פריטים נוספים</a>`
let id=parseInt(item.id) 
button2.setAttribute("onClick",`MoreDetails(${id})`)
button1.setAttribute("onClick",`addToCart(${id})`)
    card.classList.add('card-item')    
    container.append(card)
   
}
//פונקציה שמעבירה לפרטים נוספים
const MoreDetails=(id)=>{
    let obj=itemsArr.find(x=>x.id==id)
    
    sessionStorage.setItem("MoreDetails",JSON.stringify(obj))
}



