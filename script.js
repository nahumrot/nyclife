
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const Clickbutton = document.querySelectorAll('button')
const tbody = document.querySelector('.tbody')
let carrito = []


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target 
    const item = button.closest('.pro')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg= item.querySelector('.imagen').src;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    } 

    addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    
    carrito.push(newItem)
    renderCarrito()
}
function renderCarrito(){

//hasta aca de 10

    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = ` 
        <tr>
          <th scope="row">1</th>
          <td class="table-productos">
              <img src=${item.img} alt="">
              <h6 class="title">${item.title} </h6>
          </td>
          <td class="table-precio"><p>${item.precio}</p></td>
          <td class="table-cantidad">
              <input type="number" min="1" value=${item.cantidad}>
              <button class="delete btn btn-danger">x</button>
          </td>`
          
        tr.innerHTML = Content;
        tbody.append(tr)
    })
}
