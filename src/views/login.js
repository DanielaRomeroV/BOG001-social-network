export default () => {
      history.replaceState({}, 'log in', '#login');
      const signin = document.createElement('div');
      signin.setAttribute('class', 'container');

      const login = document.createElement('section');
      login.setAttribute('id', 'login');
      login.innerHTML = `<img src="img/icon.png" alt="logo_image" class="logo"/>`;


      const input = document.createElement('form');
      input.setAttribute('class', 'input-container');
      input.innerHTML = `<input type="text" id="loginame" class="username" placeholder="User name o email">
      <br>
      <input type="password" class="username" id="loginpass" placeholder="Contraseña">
      <p>¿Olvidaste tú contraseña? <a href="#recover">Click aquí</a></p>
      <button type="submit" class="btn">ENTRAR</button>`;


      const createAccount = document.createElement('div');
      createAccount.setAttribute('class', 'createAccount');
      createAccount.innerHTML = `<p>¿Eres un usuario nuevo? <a href="#createAccount">Crea una cuenta</a></p>
      <p>o ingresa con</p>
      <img src="img/google.png" width="25" height="25" class="google">`;


      login.appendChild(input);
      login.appendChild(createAccount);
      signin.appendChild(login);

      const loginForm = signin.querySelector(".input-container");
      loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const loginEmail = loginForm["loginame"].value;
            const passwordLogin = loginForm["loginpass"].value;

            console.log(loginEmail, passwordLogin);
            loginUser(loginEmail, passwordLogin);
      });

      //Google Login

      const googleBtn = createAccount.querySelector(".google");
      googleBtn.addEventListener("click", () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            loginGoogle(provider);
      });

//click boton de login a el muro
/*
      signin.addEventListener('click', () => {
            window.location = '#muro';
          });*/

      return signin;      
}

//sign in
async function loginUser(loginEmail, passwordLogin) {
      try {
            const userLogin = await auth.signInWithEmailAndPassword(loginEmail, passwordLogin);
            console.log(userLogin);
      }
      catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage, errorCode);
      }
}

async function loginGoogle(provider) {
      try {
            const googleLogin = await auth.signInWithPopup(provider);
            const token = googleLogin.credential.accessToken;
            const user = googleLogin.user;
            console.log(user);
      } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage);
      }


      
}




