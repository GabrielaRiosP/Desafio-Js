
    precioBase = document.querySelector(".precio-inicial");
    cantidad = document.querySelector(".cantidad");
    const Total = document.querySelector(".valor-total");
    const incrementar = document.querySelector("#incrementar");
    const decrementar = document.querySelector("#decrementar"); 

incrementar.addEventListener("click", () => { 
    cantidad.innerHTML++
    Total.innerHTML = (cantidad.innerHTML * precioBase.innerHTML) .toLocaleString()

})

decrementar.addEventListener("click", () => {
    cantidad.innerHTML--
    Total.innerHTML = (cantidad.innerHTML * precioBase.innerHTML) .toLocaleString()
})



