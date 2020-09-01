import { currentUser } from '../lib/firebaseAuth.js';

export default () => {

    const profile = document.createElement('div');
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<h2 id="profileName">Mi perfil</h2>
        <img src="${currentUser().photoURL}" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <div id="editPhoto">
        <label for="archivo">
        <img src="img/editProfile.png" alt ="Click aquí para subir tu foto"> 
        </label>
        <input type="file" id="archivo" name="archivo" accept="image/*">
        </div>
        <h1 id="nameUser">${currentUser().displayName}</h1>
        <ul>
            <li id="mail">
            ${currentUser().email}
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti">
        <button type="submit" class="btn update" id="btnUp" >ACTUALIZAR</button>
        <h2 id="publication">Mis publicaciones</h2>
        <div class="comment">
            <p>Aqui va un comentario</p>
            <div id="deleteIcon"></div>
            <div id="confirm">
            <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
            <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
            </div>
            </div>`;
    const photos = profile.querySelector('#archivo');
    const previewPhoto = profile.querySelector('#preview');
    const defaultImage = profile.querySelector('.default-image');
    const btnUpdate = profile.querySelector('#btnUp');
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
      /*const valueChange = document.getElementById('biography').value;
      valueChange.innerHTML= `${valueChange}`*/;
      if (!file){
        console.log('No existe archivo para cambiar la imagen!');
      }else{
        const storageRef = storage.ref('userProfileImgs/'+ file.name);
        const task = storageRef.put(file);
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
