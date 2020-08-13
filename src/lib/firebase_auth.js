
//create Account  
export async function signUser (email, pass) {
    try{
        const userNew = await auth.createUserWithEmailAndPassword(email,pass);
        console.log (userNew);

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.log(errorMessage,errorCode);
    }
}

//recover

export async function recoverUser(message,email){
    try{
        const userRecover = await auth.sendPasswordResetEmail(email);
        message.innerHTML = `Hemos enviado un email a ${email} para cambiar la contraseña`;
    }
    catch(error){
        message.innerHTML = `No se ha podido enviar el correo`;
        console.log('No se envio el correo');
    }
}

//sign in,login

export async function loginUser (loginEmail,passwordLogin){
    try{
    const userLogin = await auth.signInWithEmailAndPassword(loginEmail,passwordLogin);
    console.log (userLogin);
    }
    catch(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage,errorCode);
    }
}

//Login with Google

export async function loginGoogle (provider){
try{
    const googleLogin = await auth.signInWithPopup(provider);
    const token = googleLogin.credential.accessToken;
    const user = googleLogin.user;
    console.log(user);

}catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode,errorMessage);
    }
}