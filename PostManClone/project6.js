let parambox = document.getElementById('paramsbox');

parambox.style.display = 'none'; 
let addcount = 0;

function elmentstring(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;  
    
}
let json = document.getElementById('json');

let custom = document.getElementById('custome');

json.addEventListener("click", () => {
    
    document.getElementById("jsonbox").style.display = "none";
    document.getElementById("paramsbox").style.display = "block";
})



custom.addEventListener("click", () => {
    document.getElementById("paramsbox").style.display = "none";
    document.getElementById("jsonbox").style.display = "block";
});

let addbtn = document.getElementById("plusbtn")
addbtn.addEventListener("click", (e) =>
{
e.preventDefault();
    let showmore = document.getElementById("moreparams");
    let str = ` <form class="row g-3">
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Paramter ${
                      addcount + 2
                    }</label>
                    <input type="email" class="form-control" id="pm1">

                </div>

                <div class="col-md-4">
                    <label for="inputPassword4" class="form-label">Parameter ${
                      addcount + 2
                    }</label>
                    <input type="password" class="form-control" id="pm2">
                </div>
                <button class="removebtn" class="btn btn-primary ">-</button>

        </div>`;
    let parstring = elmentstring(str)
    let delet = document.getElementsByClassName("removebtn");
    for (item of delet) {
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    }
showmore.appendChild(parstring);    
    addcount++;
})