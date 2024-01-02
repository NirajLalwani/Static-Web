// const kg_Rate = 100;
// const gram = 180;
console.log("it is Called");


document.querySelector('.my_form').addEventListener('submit', () => {
    event.preventDefault();
    console.log("Inside Function");
    const kg_gram = document.querySelectorAll(".kg_Rate_Gram");
    var cost = 110;

    let parent = document.getElementsByClassName("message")
    console.log("This is Parent", parent)
    Array.from(kg_gram).map(current => {
        let gram_ele = current.querySelector("#Gram")

        let gram = current.querySelector("#Gram").value;
        let kg_Rate = current.querySelector("#Rate").value;
        gram = parseFloat(gram)
        kg_Rate = parseFloat(kg_Rate)
        console.log(kg_Rate);
        console.log(gram);
        cost += (gram * kg_Rate) / 1000

        const element = document.createElement('p');
        element.textContent = `${gram_ele.getAttribute('name')} - ${(gram * kg_Rate) / 1000}`
        console.log("This is Parent", parent)
        console.log("This is Element", element);
        parent[0].appendChild(element)
        console.log(cost)
    })

    let Tobaco_Rate = document.getElementById("Tobaco_Rate").value;
    let Tobaco_Box = document.getElementById("Tobaco_Box").value;
    let Tobaco_Box_ele = document.getElementById("Tobaco_Box");
    Tobaco_Rate = parseFloat(Tobaco_Rate) / 20;
    Tobaco_Box = parseFloat(Tobaco_Box);

    const Tobaco_cost = Tobaco_Box * Tobaco_Rate
    cost += Tobaco_cost;



    cost = cost.toFixed(2)
    
    
    const ele2 = document.createElement('p');
    ele2.textContent = `${Tobaco_Box_ele.getAttribute('name')} - ${Tobaco_cost}`
    parent[0].appendChild(ele2)
    
    const ele = document.createElement('p');
    ele.textContent = `मजुरी - 110`
    parent[0].appendChild(ele)
    
    
    document.getElementById("total").innerHTML = cost;
    let Number_packets = document.querySelector('#packet').value;
    document.querySelector("#Packet_Total").innerHTML = cost / Number_packets;




})
