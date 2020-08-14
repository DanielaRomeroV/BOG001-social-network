
// create Account
export async function signUser(email, password) {
  try {
    const userNew = await auth.createUserWithEmailAndPassword(email, password);
    console.log(userNew);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}

// recover

export async function recoverPassword(message, email) {
  try {
    const userRecover = await auth.sendPasswordResetEmail(email);
    message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
  } catch (error) {
    message.innerHTML = 'No se ha podido enviar el correo';
    console.log('No se envio el correo');
  }
}

// login

export async function loginUser(loginEmail, LoginPassword) {
  try {
    const userLogin = await auth.signInWithEmailAndPassword(loginEmail, LoginPassword);
    console.log(userLogin);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage, errorCode);
  }
}

// Login with Google

export async function loginGoogle(provider) {
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
