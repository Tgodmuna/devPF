let hi = document.getElementById("greeting");
let getUserName = prompt("please🙏 tell me your name");
if (getUserName === null || getUserName === "" || getUserName === undefined) {
  hi.innerHTML =
    "<p>Vistor..! You Didn't Tell Me Your Name😭☹☹ <br> By The Way You Are Welcome To My Portfolio<p>";
} else {
  let showGreeting = (hi.innerHTML =
    "<p>Hi🖐<p1>" +
    getUserName.toUpperCase() +
    "<p>welcome to my Portfolio 😊😊😊💖<p>");
}
hi.style.color
