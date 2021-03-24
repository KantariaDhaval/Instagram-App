import { btnTypes, classes } from '../registry.js';
import {postsModel} from './postsModel.js';
import {postsView} from './postsView.js';

let postsController = {
    init: function(data) {
        postsModel.setPostsData(data.postsData);
        postsModel.setIgtvData(data.igtvData);
        postsModel.setSavedData(data.savedData);
        postsModel.setTaggedData(data.taggedData);
        postsView.init(postsModel.getActiveTab());
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
        changeTab: function(clickedBtn) {
            const currentTab = clickedBtn.dataset.btntype;
            const previousTab = postsModel.getActiveTab();
            postsModel.setActiveTab(currentTab);
            postsView.hidePreviousTab(previousTab);
            postsView.showActiveTab(postsModel.getActiveTab());
        },
    
        updateLikeCommentBtn: function(clickedBtn) {
            const icon = clickedBtn.firstChild;
            const numberOfLikesOrComments = clickedBtn.childNodes[1];
            
            const dataType = clickedBtn.dataType;
            const index = clickedBtn.dataset.index;
        
            if (icon.dataset.btntype === btnTypes.LIKE_ICON) {
                postsModel.togglePostLiked(dataType, index);
                postsView.updateLikeOrCommentCounts(numberOfLikesOrComments, postsModel.getNumberOfLikes(dataType, index));
                postsView.toggleLikeOrCommentIcon(icon, classes.ACTIVE_LIKE_ICON);
            } else {
                postsModel.togglePostCommented(dataType, index);
                postsView.updateLikeOrCommentCounts(numberOfLikesOrComments, postsModel.getNumberOfComments(dataType, index));
                postsView.toggleLikeOrCommentIcon(icon, classes.ACTIVE_COMMENT_ICON);
            }

        }
    }
}

export {postsController};