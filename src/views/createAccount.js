export default ()=>{
    const createAccount = document.createElement('div');
    createAccount.setAttribute('class', 'accountOne');
    const sectionAccount = document.createElement('section');
    sectionAccount.setAttribute('id', 'createAccount');
    sectionAccount.innerHTML = ` <img src="img/besticono.png" id="iconoOne">
    <h1>Crea una nueva Cuenta</h1> 
    <h2>Username</h2>
    <input type="text" id="nameUser" class="controls" placeholder="Nombre de Usuario"/>
    <h2>Email</h2>
    <input type="text" id="correo" class="controls" placeholder="nameuser@gmail.com"/>
    <h2>Password</h2>
    <input type="text" id="contraseña" class="controls" placeholder="*********"/>
    <h2>Birth Date</h2>
    <input type="text" id="birthday" class="controls" placeholder="27/08/20"/>
    <div id="hi">
    <button id="buttonOne" class="startButton">REGISTRARSE</button>
    </div>
    `;
    createAccount.appendChild(sectionAccount);
    return createAccount;
    }

    