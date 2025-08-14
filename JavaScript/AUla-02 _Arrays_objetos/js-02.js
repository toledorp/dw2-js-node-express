//Arrays (Vetores): Servem para armazenar uma lista, ou seja, diferentes
//elementosem unica variável.

const products = ["Computador", "Notebook", "Celular", "Tablet"]
document.write(`<p>${products}</p>`)
document.write(typeof(products))
document.write(`<p>Exibindo um elemento do arrays através do indice:</p>`)
document.write(`<p>${products[3]}</p>`)

document.write(`<p>Percorrendo um array através de um forEach</p>`)
products.forEach(produto => {
    document.write(`<p>${produto}</p>`)
})

