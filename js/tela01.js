//JS 
console.log('Hello JS')

let combo = []
let pontos = 0

const inputText = document.querySelector('#nome')
const btnJogar = document.querySelector('#btnJogar')

function showHide(obj,action){
    document.querySelector(obj).classList[action]('hide')
}

// btnJogar.onclick= () => { alert(inputText.value) }

// btnJogar.onclick = function(){ alert(inputText.value)}

btnJogar.addEventListener('click',()=>{
    showHide('#telaJogo','remove')
    showHide('#telaInicial','add')
    inputText.value != '' ? localStorage.setItem('jogador', inputText.value) : null
    let nomeJogador = textContent=localStorage.getItem('jogador')
    document.querySelector('#user').textContent=('Olá, ' + nomeJogador + '. Boa sorte!')
    sortear();
    console.log(pontos)
    document.querySelector('#pontuacao').textContent=(pontos)
    document.querySelector('#pontuacao2').textContent=(combo)


})

function sortear ()
{
    let imgs = document.querySelectorAll('#numbers img')
    imgs.forEach((el, index)=>{
    combo.push(parseInt(Math.random()*3)+1)
    console.log(combo)
    el.addEventListener('click', (e)=>{
        e.target.src=`./images/number_${combo[index]}.png`
    })
    })

    console.log(combo[0] == combo[1] && combo[0] == combo[2] && combo[1] == combo[2])

    if (combo[0] == combo[1] && combo[0] == combo[2] && combo[1] == combo[2]){
        pontos = pontos+1;
    }
}


