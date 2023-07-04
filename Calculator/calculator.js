let screen = document.getElementById("screen");

let button = document.querySelectorAll("button");
let Result = "";

for (btn of button) {
  btn.addEventListener("click", (e) => {
    buttontext = e.target.innerText;

    if (buttontext == "X") {
      buttontext = "*";
      Result += buttontext;
      screen.value = Result;
    } else if (buttontext == "C") {
      screenvalue = "";
      screen.value = Result;
    } else if (buttontext == "=") {
      screen.value = eval(Result);
    } else {
      Result += buttontext;
      screen.value = Result;
    }
  });
}



const body = document.body
const div = document.createElement("div");
body.append(div);
// div.innerText = "hy this is my div";s
div.innerHTML = "<strong> hello</strong>"

