import {postsModel} from './../Model/postsModel.js';
import {postsView} from './../View/postsView.js';

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
        changeTab: function(currentTab) {
            const previousTab = postsModel.getActiveTab();
            postsModel.changeActiveTab(currentTab);
            postsView.hidePreviousTab(previousTab);
            postsView.showActiveTab(postsModel.getActiveTab());
        },
    
        updateLikeCommentBtn: function(clickedBtn) {
            const icon = clickedBtn.firstChild;
            const children = clickedBtn.childNodes;
            const dataType = clickedBtn.dataType;
            const index = clickedBtn.dataset.index;
        
            if (icon.classList.contains('fa-heart')) {
                postsModel.toggleIsLiked(dataType, index);
                postsView.updateLikeOrCommentCounts(children[1], postsModel.getNumberOfLikes(dataType, index));
                postsView.toggleLikeOrCommentIcon(icon, 'activeLikeIcon');
            } else {
                postsModel.toggleIsCommented(dataType, index);
                postsView.updateLikeOrCommentCounts(children[1], postsModel.getNumberOfComments(dataType, index));
                postsView.toggleLikeOrCommentIcon(icon, 'activeCommentIcon');
            }

        }
    }
}

export {postsController};