let size = 10;
let orderElement = 1;




const init = () => {
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);

    btn.textContent = "Dodaj 10 elementów listy";
    btn.addEventListener("click", createLiElements);
}



const createLiElements = () => {



    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`
        document.querySelector("ul").appendChild(li);

        li.style.fontSize = `${size++}px`;


    }



}

init()