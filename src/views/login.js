import { loginUser, loginGoogle } from '../lib/firebaseAuth.js';


export default () => {
  history.replaceState({}, 'log in', '#login');
  const signin = document.createElement('div');
  signin.setAttribute('class', 'container');

  const login = document.createElement('section');
  login.setAttribute('id', 'login');
  login.innerHTML = '<img src="img/icon.png" alt="logo_image" class="logo"/>';


  const input = document.createElement('form');
  input.setAttribute('class', 'input-container');
  input.innerHTML = `<input type="text" id="username" class="username" placeholder="User name o email">
      <br>
      <input type="password" class="username" id="pass" placeholder="Contraseña">
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

  const loginSigIn = signin.querySelector("form");
  loginSigIn.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginEmail = loginSigIn["username"].value;
    const passwordLogin = loginSigIn["pass"].value;

    console.log(loginEmail, passwordLogin);
    loginUser(loginEmail, passwordLogin);
  });

  //Google Login

  const google = createAccount.querySelector(".google");
  google.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    loginGoogle(provider);
  });
  return signin;
}