export default () => {
    history.replaceState({}, 'createAccount', '#createAccount');
    const createAccount = document.createElement('div');
    createAccount.setAttribute('class', 'accountOne');

    const sectionAccount = document.createElement('section');
    sectionAccount.setAttribute('id', 'createAccount');

    sectionAccount.innerHTML = ` <h1>Crea una nueva Cuenta</h1>
     <form id="account">
          <label for="nameUser">Nombre de Usuario</label>
          <input type="text" id="nameUser" class="controls" placeholder="Nombre de Usuario" required title="Llena el campo"/>
          <br>
          <label for="correo">Email</label>
          <input type="text" id="correo" class="controls" placeholder="usuario@gmail.com"  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Inserta un correo electronico válido"/>
          <br>
          <label for="contraseña">Contraseña</label>
          <input type="password" id="contraseña" class="controls" placeholder="*********" required pattern=".{6,}" title="Debe contener 6 o más carácteres"/>
          <br>
          <label for="birthday">Fecha de Nacimiento</label>
          <input type="date" id="birthday" class="controls" placeholder="27/08/2000" required  pattern= "(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}" title="Día/Mes/Año"/>
          <br>
          <br>
          <button type= "submit" id="buttonOne" class="btn">REGISTRARSE</button>
          </form>`;

    createAccount.appendChild(sectionAccount);

    const register = createAccount.querySelector('#account');
    register.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info

        const email = register['correo'].value;
        const name = register['nameUser'].value;
        const pass = register['contraseña'].value;
        const birthDate = register['birthday'].value;


        console.log(email, name, pass, birthDate);
        signUser(email, pass);
    });
    return createAccount;
}

//sign up the user
//Async/Await Resolver la promesa, el catch me dice si la promesa se resuelve o no, try se encuentra lo que se resuelve, y en el catch pongo lo que pasaria si la promesa no se resuelve.
//Se puede utilizar de forma independiente el try catch, o el async await.
async function signUser(email, pass) {
    try {
        const userNew = await auth.createUserWithEmailAndPassword(email, pass);
        console.log(userNew);

        window.location = '#thankAccount';

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
    }
}