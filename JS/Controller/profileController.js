import {profileModel} from './../Model/profileModel.js';
import {profileView} from './../View/profileView.js';

let profileController = {
    init: function() {
        profileView.init();
    },

    getData: function() {
        return profileModel.data;
    },

    eventListeners: {
        toggleFollowBtn: function() {
            const isFollowed = profileModel.toggleFollow();
            profileView.updateFollowerCount(profileModel.getNumberOfFollowers());
            profileView.toggleFollowLayout(isFollowed);
        }
    }
}

export {profileController};