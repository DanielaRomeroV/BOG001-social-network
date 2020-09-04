
const auth = () => ({
  createUserWithEmailAndPassword: (email, pass) => new Promise((resolve) => {
    resolve(`usuario nuevo ${email} y ${pass}`);
  }),
  signInWithEmailAndPassword: (loginEmail, password) => new Promise((resolve) => {
    resolve(`ingreso con ${loginEmail} y ${password}`);
  }),
  sendPasswordResetEmail: email => new Promise((resolve) => {
    resolve(`le enviamos un correo a ${email} para recuperar la contraseña `);
  }),

});


export default jest.fn(() => auth);
