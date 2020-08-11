export default ()=>{
    history.replaceState({},'log in', '#login');
    const signin = document.createElement('div');
    signin.setAttribute('class', 'container');

    const login = document.createElement('section');
    login.setAttribute('id', 'login');
    login.innerHTML = `<img src="img/icon.png" alt="logo_image" class="logo"/>`;


    const input = document.createElement('form');
    input.setAttribute('class', 'input-container') ;
    input.innerHTML = `<input type="text" class="username" placeholder="User name o email">
          <br>
          <input type="password" class="password" placeholder="Contraseña" >
          <p>¿Olvidaste tú contraseña? <a href="#recover">Click aquí</a></p>
          <button type="button" class="btn">ENTRAR</button>`;


    const createAccount = document.createElement('div');
    createAccount.setAttribute('class', 'createAccount');
    createAccount.innerHTML = `<p>¿Eres un usuario nuevo? <a href="#createAccount">Crea una cuenta</a></p>
                <p>o inglesa con</p>
                <img src="img/google.png" width="30" height="30" class="google">`;


    login.appendChild(input)
    login.appendChild(createAccount)
    signin.appendChild(login)



    const loginForm = signin.querySelector('form');
    loginForm.addEventListener('button', (e) => {
      e.preventDefault();
      

      const email = loginForm['username'].value;
      const password = loginForm['password'].value;
      console.log(email, password );
      Login(email, password);


    })  
    return  signin;
 }

 async function Login(email, pass) {
  try {
        const user = await auth.signInWithEmailAndPassword(email, pass);
        console.log(user);
  }
  catch (error) {
        console.log("error")
  }

}

