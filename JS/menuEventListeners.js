const postsBtn = document.getElementById('postsBtn');
const igtvBtn = document.getElementById('igtvBtn');
const savedBtn = document.getElementById('savedBtn');
const taggedBtn = document.getElementById('taggedBtn');
const posts = document.getElementById('posts');
const igtv = document.getElementById('igtv');
const saved = document.getElementById('saved');
const tagged = document.getElementById('tagged');

postsBtn.addEventListener('click', (e) => {
    eventListeners.changeTab(e.target, posts);
})

igtvBtn.addEventListener('click', (e) => {
    eventListeners.changeTab(e.target, igtv);
})

savedBtn.addEventListener('click', (e) => {
    eventListeners.changeTab(e.target, saved);
})

taggedBtn.addEventListener('click', (e) => {
    eventListeners.changeTab(e.target, tagged);
})

var eventListeners = {
    changeTab: function(targetBtn, currentTab, currentNumberOfPhotos) {
        helperFunctions.removeActiveClassFromBtn();
        targetBtn.classList.add('active');
        helperFunctions.addHiddenClassToContainers();
        currentTab.classList.remove('hidden');
        // numberOfPhotos.innerText = currentNumberOfPhotos;
    },

    likeCommentBtn: function(icon, className, numberOfCounts) {
        icon.classList.toggle(className);
        helperFunctions.updateCount(numberOfCounts, icon, className);
    }
}

var helperFunctions = {
    removeActiveClassFromBtn: function() {
        postsBtn.classList.remove('active');
        igtvBtn.classList.remove('active');
        savedBtn.classList.remove('active');
        taggedBtn.classList.remove('active');
    },

    addHiddenClassToContainers: function() {
        posts.classList.add('hidden');
        igtv.classList.add('hidden');
        saved.classList.add('hidden');
        tagged.classList.add('hidden');
    },

    updateCount: function(numberOfCounts, icon, className) {
        let count = parseInt(numberOfCounts.innerText);
        if(icon.classList.contains(className)) {
            count++;
        } else {
            count--;
        }
        numberOfCounts.innerText = count;
    }
}

export {eventListeners};