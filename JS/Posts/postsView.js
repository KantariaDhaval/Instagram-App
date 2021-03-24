import {DOMElements, classes} from '../registry.js';
import {buildPosts} from '../buildPosts.js';
import {postsController} from './postsController.js';
import { profileController } from '../Profile/profileController.js';

const postsView = {

    init: function(activeTab) {
        this.render();
        this.showActiveTab(activeTab);
    },

    render: function() {
        const postsData = postsController.getPostsData();
        const igtvData = postsController.getIgtvData();
        const savedData = postsController.getSavedData();
        const taggedData = postsController.getTaggedData();

        profileController.setNumberOfPosts(postsData.length);
        
        buildPosts.build(postsData, DOMElements.POSTS_CONTAINER);
        buildPosts.build(igtvData, DOMElements.IGTV_CONTAINER);
        buildPosts.build(savedData, DOMElements.SAVED_CONTAINER);
        buildPosts.build(taggedData, DOMElements.TAGGED_CONTAINER);
    },

    hidePreviousTab: function(tab) {
        DOMElements[tab+'_BTN'].classList.remove(classes.ACTIVE);
        DOMElements[tab].classList.add(classes.HIDDEN);
    },

    showActiveTab: function(tab) {
        DOMElements[tab+'_BTN'].classList.add(classes.ACTIVE);
        DOMElements[tab].classList.remove(classes.HIDDEN);
    },

    updateLikeOrCommentCounts: function(countSpan, numberOfCounts) {
        countSpan.innerText = numberOfCounts;
    },

    toggleLikeOrCommentIcon: function(icon, className) {
        icon.classList.toggle(className);
    }
}

const menuContainer = document.getElementById('menuContainer');
menuContainer.addEventListener('click', (e) => {
    postsController.eventListeners.changeTab(e.target);
})

const postsWrapper = document.getElementById('postsWrapper');
postsWrapper.addEventListener('click', (e) => {
    if (e.target.dataset.btntype === "likeOrCommentBtn") {
        postsController.eventListeners.updateLikeCommentBtn(e.target);
    }
})

export {postsView};