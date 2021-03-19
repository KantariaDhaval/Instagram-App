import {profileModel} from './../Model/profileModel.js';
import {profileView} from './../View/profileView.js';
import {helperFunctions} from './../helperFunctions.js';
import {ids} from './../registry.js';

let profileController = {
    init: function() {
        profileModel.fetchData()
            .then(data => {
                // console.log(data);
                profileView.init(data.profileData);
            });
    },

    eventListeners: {
        toggleFollowBtn: function() {
            helperFunctions.toggleClass(ids.FOLLOW_BTN, 'activeFollowBtn');
            helperFunctions.toggleClass(ids.MESSAGE_BTN, 'hidden');
            helperFunctions.toggleClass(ids.DROPDOWN_BTN, 'activeFollowBtn');
    
            let currentFollowers = parseInt(followers.innerText);
            if(followBtn.classList.contains('activeFollowBtn')) {
                followBtn.innerText = "Unfollow";
                currentFollowers++;
            } else {
                followBtn.innerText = "Follow";
                currentFollowers--;
            }
            followers.innerText = currentFollowers;
        }
    }
}

export {profileController};