import {ids} from './../registry.js';
import {buildPosts} from './../buildPosts.js';
import {postsController} from './../Controller/postsController.js';

let postsView = {
    init: function(data) {
        this.postsData = postsController.getPostsData();
        this.igtvData = postsController.getIgtvData();
        this.savedData = postsController.getSavedData();
        this.taggedData = postsController.getTaggedData();

        ids.NUMBER_OF_PHOTOS.innerText = this.postsData.length;
        
        this.render();
    },

    render: function() {
        buildPosts.build(this.postsData, ids.POSTS_CONTAINER);
        buildPosts.build(this.igtvData, ids.IGTV_CONTAINER);
        buildPosts.build(this.savedData, ids.SAVED_CONTAINER);
        buildPosts.build(this.taggedData, ids.TAGGED_CONTAINER);
    }
}

ids.POSTS_BTN.addEventListener('click', (e) => {
    postsController.eventListeners.changeTab(e.target, ids.POSTS);
})

ids.IGTV_BTN.addEventListener('click', (e) => {
    postsController.eventListeners.changeTab(e.target, ids.IGTV);
})

ids.SAVED_BTN.addEventListener('click', (e) => {
    postsController.eventListeners.changeTab(e.target, ids.SAVED);
})

ids.TAGGED_BTN.addEventListener('click', (e) => {
    postsController.eventListeners.changeTab(e.target, ids.TAGGED);
})

ids.POSTS_WRAPPER.addEventListener('click', (e) => {
    if (e.target.classList.contains('photoHoverBtn')) {
        const icon = e.target.firstChild;
        const children = e.target.childNodes;
        
        if (icon.classList.contains('fa-heart')) {
            postsController.eventListeners.likeCommentBtn(icon, 'activeLikeIcon', children[1]);
        } else {
            postsController.eventListeners.likeCommentBtn(icon ,'activeCommentIcon', children[1]);
        }
    }
})

export {postsView};