var btn = document.getElementById("test");

btn.addEventListener("click", addTech);

var list = document.getElementById("tech");
var temp = true;
function addTech() {
    if(temp==true){
    var x = document.createElement("li")
    x.innerText = "JavaScript";
    // list.appendChild(x);
    console.log(list.childNodes);
    list.insertBefore(x, list.childNodes[4]);
    temp=false;
    }else{
        return false;
    }
}
var btn = document.getElementById("test");

btn.addEventListener("click", addTech);

var list1 = document.getElementById("tech")
var temp1 = true;
function removeTech() {
    
    if (temp1 == true) {
        // list.removeChild(list.lastElementChild)
        list.removeChild(list1.firstElementChild)
        temp1 = false;
    }else{
        return false;
    }
}