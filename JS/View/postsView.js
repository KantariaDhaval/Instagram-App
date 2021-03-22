import {ids} from './../registry.js';
import {buildPosts} from './../buildPosts.js';
import {postsController} from './../Controller/postsController.js';

let postsView = {

    init: function(activeTab) {
        this.postsData = postsController.getPostsData();
        this.igtvData = postsController.getIgtvData();
        this.savedData = postsController.getSavedData();
        this.taggedData = postsController.getTaggedData();

        ids.NUMBER_OF_PHOTOS.innerText = this.postsData.length;
        
        this.render();
        this.showActiveTab(activeTab);
    },

    render: function() {
        buildPosts.build(this.postsData, ids.POSTS_CONTAINER);
        buildPosts.build(this.igtvData, ids.IGTV_CONTAINER);
        buildPosts.build(this.savedData, ids.SAVED_CONTAINER);
        buildPosts.build(this.taggedData, ids.TAGGED_CONTAINER);
    },

    hidePreviousTab: function(tab) {
        ids[tab+'_BTN'].classList.remove('active');
        ids[tab].classList.add('hidden');
    },

    showActiveTab: function(tab) {
        ids[tab+'_BTN'].classList.add('active');
        ids[tab].classList.remove('hidden');
    },

    updateLikeOrCommentCounts: function(countSpan, numberOfCounts) {
        countSpan.innerText = numberOfCounts;
    },

    toggleLikeOrCommentIcon: function(icon, className) {
        icon.classList.toggle(className);
    }
}

ids.POSTS_BTN.addEventListener('click', () => {
    postsController.eventListeners.changeTab('POSTS');
})

ids.IGTV_BTN.addEventListener('click', () => {
    postsController.eventListeners.changeTab('IGTV');
})

ids.SAVED_BTN.addEventListener('click', () => {
    postsController.eventListeners.changeTab('SAVED');
})

ids.TAGGED_BTN.addEventListener('click', () => {
    postsController.eventListeners.changeTab('TAGGED');
})

ids.POSTS_WRAPPER.addEventListener('click', (e) => {
    if (e.target.classList.contains('photoHoverBtn')) {
        postsController.eventListeners.updateLikeCommentBtn(e.target);
    }
})

export {postsView};