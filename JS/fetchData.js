import {setProfileData, setPhotosData} from './setData.js';

async function fetchData() {
    await fetch('./../JSON/Data.JSON')
            .then((response) => response.json())
            .then((data) => {
                // PROFILE DATA
                setProfileData(data.profileData);

                // MENU DATA
                numberOfPhotos.innerText = data.postsData.length;
                numberOfPosts = data.postsData.length;
                numberOfIgtvs = data.igtvData.length;
                numberOfSaved = data.savedData.length;
                numberOfTagged = data.taggedData.length;
                setPhotosData(data.postsData, postsContainer);
                setPhotosData(data.igtvData, igtvContainer);
                setPhotosData(data.savedData, savedContainer);
                setPhotosData(data.taggedData, taggedContainer);
            });
}

fetchData();