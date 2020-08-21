
// create Account
export async function signUser(email, password) {
  try {
    const userNew = await auth.createUserWithEmailAndPassword(email, password);
    console.log(userNew);
    window.location = '#thankAccount';
    return userNew;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}


// login

export async function loginUser(loginEmail, passwordLogin) {
  try {
    const userLogin = await auth.signInWithEmailAndPassword(loginEmail, passwordLogin);
    console.log(userLogin);
   window.location = '#timeline';
return userLogin;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
  }
}

// recover

export async function recoverPassword(message, email) {
  try {
    const userRecover = await auth.sendPasswordResetEmail(email);
    message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
    return userRecover;
  } catch (error) {
    message.innerHTML = 'No se ha podido enviar el correo';
    console.log('No se envio el correo');
  }
}



// Login with Google

export async function loginGoogle(provider) {
  try {
    const googleLogin = await auth.signInWithPopup(provider);
    const token = googleLogin.credential.accessToken;
    const user = googleLogin.user;
    console.log(user);
    window.location = '#timeline';
    return googleLogin;
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage);
  }
}
