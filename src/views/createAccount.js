export default () => {
      history.replaceState({}, 'createAccount', '#createAccount');
      const createAccount = document.createElement('div');
      createAccount.setAttribute('class', 'accountOne');

      const sectionAccount = document.createElement('section');
      sectionAccount.setAttribute('id', 'createAccount');

      sectionAccount.innerHTML = ` <h1>Crea una nueva Cuenta</h1>
          <form id="account">
          <label for="nameUser">Nombre de Usuario</label>
          <input type="text" id="nameUser" class="controls" placeholder="Nombre de Usuario"/>
          <br>
          <label for="correo">Email</label>
          <input type="text" id="correo" class="controls" placeholder="usuario@gmail.com"/>
          <br>
          <label for="contraseña">Contraseña</label>
          <input type="password" id="contraseña" class="controls" placeholder="*********"/>
          <br>
          <label for="birthday">Fecha de Nacimiento</label>
          <input type="date" id="birthday" class="controls" placeholder="27/08/20"/>
          <br>
          <br>
          <button type= "submit" id="buttonOne" class="btn">REGISTRARSE</button>
          </form>`;

      createAccount.appendChild(sectionAccount);

      const register = createAccount.querySelector('#account');
      register.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = register['correo'].value;
            const password = register['contraseña'].value;
            const name = register['nameUser'].value;
            const birthDate = register['birthday'].value;

            console.log(email, password, name, birthDate);
            signUser(email, password);

      })
      return createAccount;
}

async function signUser(email, pass) {
      try {
            const userNew = await auth.createUserWithEmailAndPassword(email, pass);
            console.log(userNew);
      }
      catch (error) {
            console.log("error")
      }
}












