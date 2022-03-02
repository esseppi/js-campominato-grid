// CREAZIONE STRUTTURA
let side = '500px'
let levelInp = document.querySelector('#level')
let campo = document.querySelector('.campo')
campo.style.maxWidth = '500px'
let play = document.querySelector('.play')
let replay = document.querySelector('.replay')
// levels
let easy = 49;
let medium = 81;
let hard = 100;
// generazione e reset
play.addEventListener('click', selectLev)
replay.addEventListener('click', cancel)
// selezione livello e generazione
function selectLev() {
    cancel();
    if (levelInp.value == 'firstLevel') {
        generazione(easy);
    } else if (levelInp.value == 'secondLevel') {
        generazione(medium);
    } else  if (levelInp.value == 'thirdLevel') {
        generazione(hard);
    } else {
        alert('Seleziona un livello')
    } 
}
// reset
function cancel () {
    campo.innerHTML = ''
    replay.classList.add('d-none')
}
// contenuto generato
function generazione (level) {
    let dim = 100 / Math.sqrt(level)
    for (let i = 1; i <= level; i++) {
        let box = document.createElement('div')
        replay.classList.remove('d-none')
        box.className = "box d-flex p-1 justify-content-center align-items-center bg-light"
        box.classList.add(`box-${i}`)
        box.style.border = '1px solid black'
        box.style.width = dim + '%'
        box.innerHTML = i;    
        campo.append(box)
    }
};