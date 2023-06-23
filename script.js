    const h1 = document.querySelector('h1')
    const input1 = document.querySelector('#calculo1')
    const input2 = document.querySelector('#calculo2')
    const button = document.querySelector('#btn_calcular')
    const p = document.querySelector('#result')
    button.addEventListener('click', btn_on_click) 

    function btn_on_click() {
        var result = +input1.value + +input2.value;
        p.innerHTML = result
    }