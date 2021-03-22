import {ids} from './registry.js';

let helperFunctions = {
    removeActiveClassFromBtn: function() {
        ids.POSTS_BTN.classList.remove('active');
        ids.IGTV_BTN.classList.remove('active');
        ids.SAVED_BTN.classList.remove('active');
        ids.TAGGED_BTN.classList.remove('active');
    },

    addHiddenClassToContainers: function() {
        ids.POSTS.classList.add('hidden');
        ids.IGTV.classList.add('hidden');
        ids.SAVED.classList.add('hidden');
        ids.TAGGED.classList.add('hidden');
    },

    updateLikeCommentCount: function(numberOfCounts, icon, className) {
        let count = parseInt(numberOfCounts.innerText);
        if(icon.classList.contains(className)) {
            count++;
        } else {
            count--;
        }
        numberOfCounts.innerText = count;
    },

    toggleClass: function(element, className) {
        element.classList.toggle(className);
    }
}

export { helperFunctions };