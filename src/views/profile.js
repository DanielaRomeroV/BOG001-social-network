import { currentUser } from '../lib/firebaseAuth.js';
import { currentUserPost} from '../lib/firebaseFirestore.js';
import { updateBiography } from '../lib/firebaseFirestore.js';

export default (biography,user,biographyid) => {

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('id', 'profileContainer');
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
        <div id="biographyid" contenteditable="false" class="biography">Escribe algo sobre ti</div>
        <button type="button" class="btnEdit" id="btnEdits"><img src="img/edit.png" alt ="Edita sobre ti" id="userEdit"></button>
        <button type="submit" class="btn update" id="btnUp" data-id="">ACTUALIZAR</button>
        <h2 id="publication">Mis publicaciones</h2>`;

    //<input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti" disabled = "true">
    const photos = profile.querySelector('#archivo');
    const previewPhoto = profile.querySelector('#preview');
    const defaultImage = profile.querySelector('.default-image');
    const btnUpdate = profile.querySelector('#btnUp');
    const saveBtn = profile.querySelector('#btnEdits');
    const contProfile = document.getElementById('profile');
    /*let biographys = document.getElementById('biographys');
        biographys.textContent = biography;
        profile.replaceChild(biographys,biography);*/
        

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

    //const getTask =() => data.collection('users').get();
    //const onGetTasks = (callback) => data.collection ('users').onSnapshot(callback);
    
  //Las promesas cuando se ejecuta then, cuando falla catch, cuando se realiza complete 
    //boton actualizar
    btnUpdate.addEventListener('click', ()=> {
      const file = currentFile;
      //console.log(file);
      let biography = document.getElementById('biographyid').value;
      updateBiography(currentUser().uid,biography);
      //console.log(e.target.dataset.id)
      //onGetTasks((querySnapshot)=>{
        //contProfile.innerHTML = '';
        //const querySnapshot = await getTask();
        //querySnapshot.forEach(doc =>{
          //const task =doc.data();
          //task.id = doc.id;
          //console.log(task);
        //console.log(doc.data());
        //contProfile.innerHTML = `<div>${doc.data().biography}</div>`
     //})
      //})
      
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

  saveBtn.addEventListener ('click', () => {
    let bioUser = document.getElementById('biographyid');
    bioUser.contentEditable = true;
    console.log('editing')
  });


  const postProfile = document.createElement('section');
      postProfile.setAttribute('id', 'profileBody');
      currentUserPost(postProfile, currentUser());
      profileContainer.appendChild(profile);
      profileContainer.appendChild(postProfile);


      
    return profileContainer;
};


