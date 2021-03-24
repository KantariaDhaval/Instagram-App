import {profileController} from './Profile/profileController.js';
import {postsController} from './Posts/postsController.js';
import {footerController} from './Footer/footerController.js';

fetch('./../../JSON/Data.JSON')
    .then((response) => response.json())
    .then((data) => {
        profileController.init(data.profileData);
        postsController.init(data);
        footerController.init();
    });