
// Crear folder y guardar las imagenes

export async function imageUpload(folder, id, file) {
    try {
        const storageRef = await storage.ref(folder + id).put(file);
        console.log(storageRef);
    } catch (error) {
        console.log(error);
    }
}

// Añadir los datos del perfil de usuario

export async function addUsersData(dataUser, uid) {
    try {
      const userData = await db.collection('user').doc(uid).set(dataUser);
      console.log(userData);
    } catch (error) {
      console.log('Error adding document: ', error);
    }
  }
