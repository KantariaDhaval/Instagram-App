import {ids} from './../registry.js';
import {buildPosts} from './../buildPosts.js';
import {postsController} from './../Controller/postsController.js';

let postsView = {
    init: function(data) {
        ids.NUMBER_OF_PHOTOS.innerText = data.postsData.length;
        
        this.render(data);
    },

    render: function(data) {
        buildPosts.build(data.postsData, ids.POSTS_CONTAINER);
        buildPosts.build(data.igtvData, ids.IGTV_CONTAINER);
        buildPosts.build(data.savedData, ids.SAVED_CONTAINER);
        buildPosts.build(data.taggedData, ids.TAGGED_CONTAINER);
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