import {postsModel} from './../Model/postsModel.js';
import {postsView} from './../View/postsView.js';
import {helperFunctions} from './../helperFunctions.js';

let postsController = {
    init: function() {
        postsView.init();
    },

    getPostsData: function() {
        return postsModel.postsData;
    },

    getIgtvData: function() {
        return postsModel.igtvData;
    },

    getSavedData: function() {
        return postsModel.savedData;
    },
    
    getTaggedData: function() {
        return postsModel.taggedData;
    },

    eventListeners: {
        changeTab: function(targetBtn, currentTab) {
            helperFunctions.removeActiveClassFromBtn();
            targetBtn.classList.add('active');
            helperFunctions.addHiddenClassToContainers();
            currentTab.classList.remove('hidden');
        },
    
        likeCommentBtn: function(icon, className, numberOfCounts) {
            helperFunctions.toggleClass(icon, className);
            helperFunctions.updateLikeCommentCount(numberOfCounts, icon, className);
        }
    }
}

export {postsController};