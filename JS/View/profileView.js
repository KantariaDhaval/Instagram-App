import {ids} from './../registry.js';
import {profileController} from './../Controller/profileController.js';

let profileView = {
    init: function(data) {
        this.render(data);
    },

    render: function(data) {
        ids.PROFILE_PHOTO_ICON.src = data.profilePhotoLink;

        ids.PROFILE_PHOTO.src = data.profilePhotoLink;
        ids.HANDLE_NAME.innerText = data.handleName;
        ids.FOLLOWERS.innerText = data.followers;
        ids.FOLLOWING.innerText = data.following;
        ids.USERNAME.innerText = data.username;
        ids.DESIGNATION.innerText = data.designation;
        ids.BIO.innerText = data.bio;
        ids.WEBSITE_LINK.href = data.websiteLink;
        ids.WEBSITE_LINK.innerText = data.websiteLink;
    }
}

ids.FOLLOW_BTN.addEventListener('click', () => {
    profileController.eventListeners.toggleFollowBtn();
})

export {profileView};