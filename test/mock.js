
const auth = () => {
    return {
        createUserWithEmailAndPassword: (email) => {
            return new Promise((resolve) => {
                resolve(`usuario nuevo ${email}`);
            })
        },
        signInWithEmailAndPassword: (loginEmail) => {
            return new Promise((resolve) => {
                resolve(`ingreso con ${loginEmail}`)

            })
        }

    }

}


export default jest.fn(() => {
    return auth;
})




