export default ()=>{
  history.replaceState({},'recoverAccount', '#recover');
  const recover = document.createElement('section');
  recover.setAttribute('class', 'recover');

  recover.innerHTML = `<div class="cont">
      <h2>Recupera tu contraseña</h2>
      <label for="email">Ingresa tu email</label>
      <input type="email" id="email" placeholder="usuario@email.com" autocomplete="off" required>
      <button type="button" name="send" class="btn_send" >ENVIAR</button>
      <p class="message"><p>
    </div>`

    const email = recover.querySelector('#email');
    const send = recover.querySelector('.send').addEventListener('click', ()=>{
      recover.querySelector('.message').style.display = 'block';
      recover.querySelector('.message').innerHTML = `Hemos enviado un email a ${email.value} para cambiar la contraseña`;
    })

    const recoverBtn = recover.querySelector(".send");
    recoverBtn.addEventListener("click", ()=>{
        const recoverMail = recoverBtn["email"].value;
        console.log(recoverMail);
        recoverUser(recoverMail);
      });

    return recover;
}

    async function recoverUser(recoverMail){
      try{
        const userRecover = await auth.sendPasswordResetEmail(recoverMail);
        console.log (userRecover);
      }
      catch(error){
        console.log('No se envio el correo')
      }
  }
