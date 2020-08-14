
const auth = () => {
    return {
        createUserWithEmailAndPassword: (email, pass) => {
            return new Promise((resolve) => {
                resolve(`usuario nuevo ${email} y ${pass}`);
            })
        },
        signInWithEmailAndPassword: (loginEmail, password) => {
            return new Promise((resolve) => {
                resolve(`ingreso con ${loginEmail} y ${password}`)

            })
        },
        sendPasswordResetEmail: (email) => {
            return new Promise ((resolve) => {
                resolve(`le enviamos un correo a ${email} para recuperar la contraseña `)
            })
        }

    }

}



export default jest.fn(() => {
    return auth;
})




