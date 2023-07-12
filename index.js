let carrinho = document.querySelector('.carrinho')
let fade = document.getElementById('fade')
let modalCarrinho = document.getElementById('modalCarrinho')
let addCart = document.getElementById('addCart')
let quantidadesAdd = 0
let confirmarPedido = document.getElementById('confirmarPedido')
let cancelar = document.getElementById('cancelar')


addCart.addEventListener('click', function (evento) {
    if (quantidadesAdd === 0) {
        quantidadesAdd++
    }
    document.getElementById('quantidade').innerText = quantidadesAdd
    document.getElementById('quantidades').innerText = quantidadesAdd
    quantidadesAdd++

})

carrinho.addEventListener('click', function (ev) {
    if (quantidadesAdd === 0) {
        alert('Carrinho vazio')
    } else {
        fade.style.display = 'block'
        modalCarrinho.style.display = 'block'
    }

})

confirmarPedido.addEventListener('click', function (ev) {
    alert('Pedido realizado com sucesso...')
    fade.style.display = 'none'
    quantidadesAdd = 0
    modalCarrinho.style.display = 'none'
    document.getElementById('quantidade').innerText = quantidadesAdd
    document.getElementById('quantidades').innerText = quantidadesAdd
})

cancelar.addEventListener('click', function (ev) {
    alert('Pedido cancelado')
    quantidadesAdd = 0
    document.getElementById('quantidade').innerText = quantidadesAdd
    document.getElementById('quantidades').innerText = quantidadesAdd
    fade.style.display = 'none'
    modalCarrinho.style.display = 'none'
})

fade.addEventListener('click', function(ev){
    fade.style.display = 'none'
    modalCarrinho.style.display = 'none'
})