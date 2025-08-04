showItem=()=>{
    
   let str=sessionStorage.getItem("MoreDetails")
    //המרה לגסון
    let arr=JSON.parse(str)
    let div =document.getElementById('div')
    let item=document.createElement('h1')
    let img=document.createElement('img')
    let price=document.createElement('h3')
    let btn=document.createElement('button')
    div.append(item,img,price,btn)
    item.innerHTML=arr.item
    price.innerHTML=arr.price
    img.src=arr.src
    img.style.width='25vw'
    btn.innerHTML=`<a href="./Shop Detail.html">חזרה למוצרים </a>`
}



