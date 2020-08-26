// createAccount
export  function currentUser() {
    const user =  auth.currentUser;
    return user;
}

export async function signUp(email, password, name) {
  try {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    const currentUser = await auth.currentUser;
    currentUser.updateProfile({displayName: name});

    window.location.hash = "#thankAccount";

    return newUser;


  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return error;
  }
}

// login
export async function logIn(email, password) {
  try {
    const userLogIn = await auth.signInWithEmailAndPassword(email, password);
    return userLogIn;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function logInGoogle(provider) {
  try {
    const userLogIn = await auth.signInWithPopup(provider);
    const token = userLogIn.credential.accessToken;
    const user = userLogIn.user;
    
    window.location.hash = '#timeline';
    console.log(user);
    return userLogIn;

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage);
  }
}

// recover
export async function recoverPass(message, email) {
  try {
    const sendEmail = await auth.sendPasswordResetEmail(email);
    return message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
  } catch (error) {
    return message.innerHTML = 'No se ha podido enviar el correo de verificación';
    
  }
}

// main log out
export async function signOut() {
  try {
    const userOut = await auth.signOut();
    return userOut;
    } catch (e) {
    console.log(e);
  }
}
