export default () => {
  history.replaceState({}, 'thankAccount', '#thankAccount');
  const thankAccount = document.createElement('div');
  thankAccount.setAttribute('id', 'thanku');
  const accountThank = document.createElement('section');
  accountThank.setAttribute('id', 'thankAccount');
  accountThank.innerHTML = `<img src="img/icon.png" id="icono">
        <h1>Gracias por crear una cuenta</h1>
        <button id="continue" class="btn"><a href="#timeline">CONTINUAR</a></button>`;
  thankAccount.appendChild(accountThank);
  return thankAccount;
};
