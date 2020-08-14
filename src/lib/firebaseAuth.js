// createAccount
export async function signUp(email, password) {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log(newUser.user);
      window.location = '#thankAccount';
    } catch (error) {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  
  // login
  export async function logIn(email, password) {
    try {
      const userLogIn = await auth.signInWithEmailAndPassword(email, password);
      window.location = '#timeline';
    } catch (error) {
      
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
      console.log(user);
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
      message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
    } catch (error) {
      message.innerHTML = 'No se ha podido enviar el correo de verificación';
      console.log('No se ha podido enviar el correo de verificación');
    }
  }
  
  // main log out
  export async function signOut() {
    try {
      const userOut = await auth.signOut();
      console.log('user out');
    } catch (e) {
      console.log(e);
    }
  }