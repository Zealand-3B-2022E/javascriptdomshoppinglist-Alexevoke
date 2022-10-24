//Write your Javascript code here
console.log("Shoppinglist")

let myElement = document.getElementById("0");
console.log(myElement);

let myList = document.getElementsByTagName("li");
console.log(myList);

myList = document.getElementsByClassName("healthy");
console.log(myList);

for (let x of myList) {
    console.log(x);
}

myElement = document.getElementById("3");
myElement.setAttribute("class", "unhealthy");
myElement.setAttribute("class", "healthy")
myElement.setAttribute("hidden", "true");
myElement.removeAttribute("hidden");

myList = document.getElementsByClassName("unhealthy");

for (let index = 0; myList.length > 0; ) {
    myList[index].setAttribute("class", "healthy");
    
}



