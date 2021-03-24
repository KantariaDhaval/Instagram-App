import {classes} from '../registry.js';
import {profileController} from './profileController.js';
import {buildProfile} from '../buildContents/buildProfile.js';

const profileView = {
    init: function() {
        this.render();
    },

    render: function() {
        const data = profileController.getData();

        const profilePhotoIcon = document.getElementById("profilePhotoIcon");
        profilePhotoIcon.src = data.profilePhotoLink;
        
        buildProfile.build(data);

        if(data.isFollowed) {
            this.toggleFollowLayout(true);
        }
    },

    updateNumberOfPosts: function(numberOfPosts) {
        const numberOfPostsElement = document.getElementById('numberOfPosts');
        numberOfPostsElement.innerText = numberOfPosts;
    },

    updateFollowerCount: function(numberOfFollowers) {
        const followers = document.getElementById('followers');
        followers.innerText = numberOfFollowers;
    },

    toggleFollowLayout: function(isFollowed) {
        const followBtn = document.getElementById('followBtn');
        const messageBtn = document.getElementById('messageBtn');
        const dropdownBtn = document.getElementById('dropdownBtn');

        followBtn.classList.toggle(classes.ACTIVE_FOLLOW_BTN);
        messageBtn.classList.toggle(classes.HIDDEN);
        dropdownBtn.classList.toggle(classes.ACTIVE_FOLLOW_BTN);

        if(isFollowed) {
            followBtn.innerText = 'Unfollow';
        } else {
            followBtn.innerText = 'Follow';
        }
    }
}

const profileContainer = document.getElementById('profileContainer');
profileContainer.addEventListener('click', (e) => {
    if(e.target.dataset.btntype === "followBtn") {
        profileController.eventListeners.toggleFollowBtn();
    }
})


export {profileView};