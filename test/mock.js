
const auth =() => {
    return {
        createUserWithEmailAndPassword : (email, password) => {
            return new Promise ((resolve) =>{
                 resolve('usuario creado con ${email} ');
            })
            },

            signInWithEmailAndPassword: (loginEmail,LoginPassword) => {
                return new Promise ((resolve) =>{
                    resolve (' ingreso con ${loginEmail} y ${loginPassword)');

         export default jest.fn(()=>{
          return auth
         })
        }  