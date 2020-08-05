
export default ()=>{
    const otherThank = document.createElement('div');
    otherThank.setAttribute('id', 'thanku');
    const accountThank = document.createElement('section');
    accountThank.setAttribute('id', 'thankAccount');
    accountThank.innerHTML = `<img src="img/besticono.png" id="icono">
    <h1>Gracias por crear una cuenta</h1>`;
    const btnThank = document.createElement('div');
    btnThank.setAttribute('id', 'th');
    btnThank.innerHTML = `<button id="continue" class="buttonContinue">CONTINUAR</button>`;
    otherThank.appendChild(accountThank);
    accountThank.appendChild(btnThank);
    return otherThank;
    }