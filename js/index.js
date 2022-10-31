//Write your Javascript code here
// console.log("Shoppinglist")

// let myElement = document.getElementById("0");
// console.log(myElement);

// let myList = document.getElementsByTagName("li");
// console.log(myList);

// myList = document.getElementsByClassName("healthy");
// console.log(myList);

// for (let x of myList) {
//     console.log(x);
// }

// myElement = document.getElementById("3");
// myElement.setAttribute("class", "unhealthy");
// myElement.setAttribute("class", "healthy")
// myElement.setAttribute("hidden", "true");
// myElement.removeAttribute("hidden");

// myList = document.getElementsByClassName("unhealthy");

// for (let index = 0; myList.length > 0; ) {
//     myList[index].setAttribute("class", "healthy");  
// }

// myElement = document.getElementById("0")
// myElement.setAttribute("class", "unhealthy")
// myElement = document.getElementById("2")
// myElement.setAttribute("class", "unhealthy")


// myElement = document.getElementById("1").parentNode

// myElement.firstElementChild.setAttribute("class", "healthy")
// myElement.lastElementChild.setAttribute("class", "unhealthy")


// const node = document.createElement("li")
// node.setAttribute("id", "4")
// node.setAttribute("class", "healthy")
// const textnode = document.createTextNode("Banana")
// node.appendChild(textnode)
// myElement.appendChild(node)

// myElement = document.getElementById("0")
// myElement.setAttribute("class", "unhealthy")
// myElement = document.getElementById("3")
// myElement.setAttribute("class", "healthy")

// myElement = document.getElementById("list")

// const node2 = document.createElement("li")
// node2.setAttribute("id", "5")
// node2.setAttribute("class", "unhealthy")
// const textnode2 = document.createTextNode("Cola")
// node2.appendChild(textnode2)

// myElement.insertBefore(node2, myElement.children[3])

// const myList1 = document.getElementsByClassName("unhealthy")
// const myList2 = document.getElementById("listUnhealthy")

// for (let index = myList1.length - 1; index >= 0; index--) {
//     const element = myList1[index];
//     myList2.insertBefore(element, myList2.children[0])
// }

// myElement = document.getElementById("list")
// myElement.firstElementChild.textContent = "Green pepper"
// myElement.removeChild(myElement.lastElementChild)

let count = 4

function Id(){
    const id = count
    count++
    return id
}

function Create(name, sundhed){
    const newNode = document.createElement("li")
    const newTextNode = document.createTextNode(name)
    newNode.setAttribute("id", Id())
    newNode.setAttribute("class", sundhed)
    newNode.appendChild(newTextNode)
    return newNode
    
}

document.getElementById("AddItem").addEventListener("click", function(){
    const name = document.getElementById("name").value
    const sundhed = document.getElementById("sundhed").value
    document.getElementById("list").appendChild(Create(name, sundhed))
})
