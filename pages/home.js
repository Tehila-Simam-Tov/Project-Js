//אימוץ דיו ויצירת כפתור
let div=document.getElementById('div')
let s=document.createElement('button');
 
 //הצגת תמונות אוטומטית
 div.append(s)
 s.innerHTML="עצור הצגת תמונות";
const srcArray = ['./images/אוכל (3).jpg',
    './images/SSGP4097.JPG',
    './images/אוכל (2).jpg',
    './images/בשר (5).jpg','./images/בשר (1).jpg']
let index = 0
let intervalID

index++;
document.getElementById("p").src=srcArray[index % srcArray.length];
intervalID = setInterval(changeImage, 3 * 1000);
s.addEventListener("click",cheke)
    //בעת לחיצה על הכפתור בדיקה האם המשתמש רוצה לעצור או להמשיך 
 function cheke(){
    if(s.innerHTML=="עצור הצגת תמונות"){
        s.innerHTML="המשך הצגת תמונות"
        clearInterval(intervalID)
    }
   
    else{
        s.innerHTML="עצור הצגת תמונות";
        intervalID = setInterval(changeImage, 3 * 1000);
    }
 }       
//פונקציה להעברת תמונה קדימה 
function changeImage(){
    index++;
    document.getElementById("p").src=srcArray[index % srcArray.length];
}
let movePrev=document.getElementById("prev");
move.addEventListener("click",minusSlides);
let movNext=document.getElementById("next");
function plusSlides(){
   

 index++;
    document.getElementById("p").src=srcArray[index % srcArray.length];
}
//פונקציה להעברת תמונות אחורה
function minusSlides(){

 index--;
    document.getElementById("p").src=srcArray[index % srcArray.length];
}

