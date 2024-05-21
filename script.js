let slide1 = document.getElementById("slide")
let links =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0InP-Z3d6Ff1Qok0RDvBh-aFSEN0SZGQfA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUyeKRvva3f8OHsAkVbdo2NAXBfBS-I_WOg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5C1ZvRQN1S8wR6X3V3zNoxOAY6PTxWwiDA&s"]
let i = 1
function prev(){
    if(i<0){
        i =links.length -1
    }
    console.log(i)
    slide1.innerHtml=`<img src=${links[i]} width="180px" height="180px"/>`
    i--
}
function next(){
    if(i > links.lenth - 1){
        i =0;
    }
    console.log(i)
    slide1.innerHTML=`<img src=${links[i]} width="180px" height="180px"/>`
    i++
}
