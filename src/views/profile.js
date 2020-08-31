import { currentUser } from '../lib/firebaseAuth.js';
//import { imageUpload, addUsersData } from '../lib/firebase_firestore.js';

/*() => {
  const profile = document.createElement('section');
  profile.setAttribute('id', 'profileBody');
  profile.innerHTML = `<div class="comment">
            <p>Aqui va un comentario</p>
            <div id="deleteIcon"></div>
            <div id="confirm">
            <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
            <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
            </div>
            </div>`;

  profile.querySelector('#deleteBtn').addEventListener('submit', ()=>{
    e.preventDefault();
  });

  window.addEventListener('click', (e)=>{

    if(e.target == profile.querySelector('#deleteIcon')){
      profile.querySelector('#confirm').style.display = 'flex';
    }else{
      profile.querySelector('#confirm').style.display = 'none';
    }

  })
  return profile;
};*/
export default () => {

    const profile = document.createElement('div');
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<img src="${currentUser().photoURL}" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <h1 id="nameUser">${currentUser().displayName}</h1>
        <input type="file" id="archivo" name="archivo"/>
        <ul>
            <li>
            <a href="#" id="emailUser">${currentUser().email}</a>
            </li>
            <li id="birthUser">
            ${currentUser().DateBirth}
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti"/>
        <button type="submit" class="btn update" id="btnUp" >ACTUALIZAR</button>`;
    const photos = profile.querySelector('#archivo');
    const previewPhoto = profile.querySelector('#preview');
    const defaultImage = profile.querySelector('.default-image');
    const btnUpdate = profile.querySelector('#btnUp');
    let currentFile = '';
  
    photos.addEventListener('change', () => {
      currentFile = photos.files[0];
      console.log(currentFile);
      if (currentFile) {
        const reader = new FileReader();
        defaultImage.style.display = 'none';
        previewPhoto.style.display = 'block';
        reader.addEventListener('load', () => {
          previewPhoto.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(currentFile);
      } else {
        defaultImage.style.display = null;
        previewPhoto.style.display = null;
        previewPhoto.setAttribute('src', '');
      }
    });

  //Las promesas cuando se ejecuta then, cuando falla catch, cuando se realiza complete 
    //boton actualizar
    btnUpdate.addEventListener('click', (e)=> {
      const file = currentFile;
      console.log(file);
      if (!file){
        console.log('No existe archivo para cambiar la imagen!');
      }else{
        const storageRef = storage.ref('userProfileImgs/'+ file.name);
        const task = storageRef.put(file);
        //revisar state_changed_downloadURL
        task.on('state_changed',function (snapshot){
          task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            currentUser().updateProfile({
              photoURL: downloadURL});
            console.log('File available at', downloadURL);
          });

        }, function error (error){
          console.log(error);

        });
    }
  
  });

    return profile;
};


