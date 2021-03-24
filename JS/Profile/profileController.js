import {profileModel} from './profileModel.js';
import {profileView} from './profileView.js';

const profileController = {
    init: function(data) {
        profileModel.setData(data);
        profileView.init();
    },

    getData: function() {
        return profileModel.data;
    },

    setNumberOfPosts: function(numberOfPosts) {
        profileModel.setNumberOfPosts(numberOfPosts);
        profileView.updateNumberOfPosts(numberOfPosts);
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