export default () => {
    history.replaceState({}, 'muro', '#muro');
    const muro = document.createElement('section');
    muro.setAttribute('class', 'recover');
  
    muro.innerHTML = `<div class="cont">
        <h2>Recupera tu contraseña</h2>
        <label for="email">Ingresa tu email</label>
        <input type="email" id="email" placeholder="usuario@email.com" autocomplete="off" required>
        <button type="button" name="send" class="btn send" >ENVIAR</button>
        <p class="message"><p>
      </div>`;
  
  
    return muro;
  };