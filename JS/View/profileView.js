import {ids} from './../registry.js';
import {profileController} from './../Controller/profileController.js';
import {helperFunctions} from './../helperFunctions.js';

let profileView = {
    init: function() {
        this.data = profileController.getData();
        this.render();
    },

    render: function() {
        ids.PROFILE_PHOTO_ICON.src = this.data.profilePhotoLink;

        ids.PROFILE_PHOTO.src = this.data.profilePhotoLink;
        ids.HANDLE_NAME.innerText = this.data.handleName;
        ids.FOLLOWERS.innerText = this.data.followers;
        ids.FOLLOWING.innerText = this.data.following;
        ids.USERNAME.innerText = this.data.username;
        ids.DESIGNATION.innerText = this.data.designation;
        ids.BIO.innerText = this.data.bio;
        ids.WEBSITE_LINK.href = this.data.websiteLink;
        ids.WEBSITE_LINK.innerText = this.data.websiteLink;
    },

    updateFollowerCount: function(followers) {
        ids.FOLLOWERS.innerText = followers;
    },

    toggleFollowLayout: function(isFollowed) {
        helperFunctions.toggleClass(ids.FOLLOW_BTN, 'activeFollowBtn');
        helperFunctions.toggleClass(ids.MESSAGE_BTN, 'hidden');
        helperFunctions.toggleClass(ids.DROPDOWN_BTN, 'activeFollowBtn');
        if(isFollowed) {
            ids.FOLLOW_BTN.innerText = 'Unfollow';
        } else {
            ids.FOLLOW_BTN.innerText = 'Follow';
        }
    }
}

ids.FOLLOW_BTN.addEventListener('click', () => {
    profileController.eventListeners.toggleFollowBtn();
})

export {profileView};