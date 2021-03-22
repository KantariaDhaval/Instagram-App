import {profileController} from './Controller/profileController.js';
import {postsController} from './Controller/postsController.js';
import {footerController} from './Controller/footerController.js';
import {profileModel} from './Model/profileModel.js';
import {postsModel} from './Model/postsModel.js';
// import {footerModel} from './Model/footerModel.js';

async function fetchData() {
    await fetch('./../../JSON/Data.JSON')
            .then((response) => response.json())
            .then((data) => {
                
                profileModel.data = data.profileData;
                postsModel.postsData = data.postsData;
                postsModel.igtvData = data.igtvData;
                postsModel.savedData = data.savedData;
                postsModel.taggedData = data.taggedData;

                profileController.init();
                postsController.init();
                footerController.init();
            });
}

fetchData();