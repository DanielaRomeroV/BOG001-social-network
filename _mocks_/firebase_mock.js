
const auth = () => {
    return {
        createUserWithEmailAndPassword: (email,pass) => {
            return new Promise ((resolve) =>{
                resolve(`Se creo un usuario con ${email} y ${pass}`);
            })
        },
        sendPasswordResetEmail: (email) => {
            return new Promise ((resolve) => {
                resolve (`Se envio un correo de restablecer contraseña a ${email}`)
            })  
        },
        signInWithEmailAndPassword: (email,password) => {
            return new Promise ((resolve) =>{
                resolve (`Se pudo loguear con ${email} y contraseña ${password}`)
            })
        },
        signInWithPopup: (user) => {
            return new Promise ((resolve) =>{
                resolve (`${user} se logueo con Google`)
            })
        } 
    }
}

/*const firebase = {
    auth:auth
}*/

export default jest.fn(() => {
    return auth;
})