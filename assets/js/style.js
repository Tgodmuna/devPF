const showDate = ()=>{
   return new Date().toDateString()
}
var dateHolder= document.getElementById("greeting");
dateHolder.innerHTML=showDate();
dateHolder.style.color="blue";
dateHolder.style.fontSize="35px";
dateHolder.style.fontFamily="monospace";
// setInterval(showDate,500);
//welcome message
let hi = document.getElementById("greeting");
let getUserName =  prompt("please🙏 tell me your name").toUpperCase()
if(getUserName ==null  ||getUserName == ''|| getUserName == undefined ){
     hi.innerHTML = "<h1>Vistor..! You Didn't Tell Me Your Name😭😭 <br> By The Way You Are Welcome<\h1>" ;
}else{
    let showGreeting = hi.innerHTML="<h1>Hi🖐<\h1>"+ getUserName+"<h1>welcome to my Portfolio 😊😊😊💖<\h1>"; 

}
//time
// let timeholder = document.getElementsByClassName("time");

// let showTime =()=>{
//     var hour = new Date().getHours();
//     var seconds = new Date().getSeconds();
//     var minute = new Date().getMinutes();
//     return(
//         hour+""+minute+""+seconds
//     )
// }
// timeholder[0].innerHTML= showTime()
// setTimeout(showTime,100);
// let body=document.getElementsByTagName("body")
// body[0].addEventListener("mouseleave",)
