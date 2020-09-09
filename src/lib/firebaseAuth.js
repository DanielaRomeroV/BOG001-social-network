// createAccount
export function currentUser() {
  const user = auth.currentUser;
  return user;
}

export async function signUp(email, password, name, birthday) {
  const photoDefault = 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png';
  try {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    const currentUser = await auth.currentUser;
    currentUser.photoURL = (currentUser.photoURL === null ? photoDefault : currentUser.photoURL);
    currentUser.updateProfile({ displayName: name });
    const userDb = await data.collection('users').doc(currentUser.uid)
      .add({
        birthday, biography: '', name, photo: (currentUser.photoURL),
      });
    window.location.hash = '#thankAccount';
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
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = userLogIn.credential.accessToken;
    // The signed-in user info.
    const user = userLogIn.user;
    console.log(user);
    const currentUser = await auth.currentUser;
    currentUser.providerData.forEach((profile) => {
      data.collection('users').doc(currentUser.uid)
        .add({ name: profile.displayName, photo: profile.photoURL, biography: '' });
    });
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
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
    // console.log('No se ha podido enviar el correo de verificación');
  }
}

// main log out
export async function signOut() {
  try {
    const userOut = await auth.signOut();
    return userOut;
    console.log('user out');
  } catch (e) {
    console.log(e);
  }
}
