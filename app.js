// CREAZIONE STRUTTURA
let campo = document.querySelector('.campo')
for (let i = 1; i <= 100; i++) {
    let box = document.createElement('div')
    box.classList.add(`box-${i}`)
    box.className = "box d-flex p-2 justify-content-center align-items-center"
    box.style.width = "10%";
    box.style.border = '2px solid black'
    box.innerHTML = i;    

    campo.append(box)
    }
