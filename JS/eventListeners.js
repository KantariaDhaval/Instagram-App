const followBtn = document.getElementById('followBtn');
const messageBtn = document.getElementById('messageBtn');
const dropdownBtn = document.getElementById('dropdownBtn');
const postsBtn = document.getElementById('postsBtn');
const igtvBtn = document.getElementById('igtvBtn');
const savedBtn = document.getElementById('savedBtn');
const taggedBtn = document.getElementById('taggedBtn');
const posts = document.getElementById('posts');
const igtv = document.getElementById('igtv');
const saved = document.getElementById('saved');
const tagged = document.getElementById('tagged');
const postsWrapper = document.getElementById('postsWrapper');

followBtn.addEventListener('click', () => {
    eventListeners.toggleFollowBtn();
})

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

postsWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('photoHoverBtn')) {
        const icon = e.target.firstChild;
        const children = e.target.childNodes;
        if(icon.classList.contains('fa-heart')) {
            eventListeners.likeCommentBtn(icon, 'activeLikeIcon', children[1]);
        } else {
            eventListeners.likeCommentBtn(icon ,'activeCommentIcon', children[1]);
        }
    }
})

const eventListeners = {
    toggleFollowBtn: function() {
        helperFunctions.toggleClass(followBtn, 'activeFollowBtn');
        helperFunctions.toggleClass(messageBtn, 'hidden');
        helperFunctions.toggleClass(dropdownBtn, 'activeFollowBtn');

        let currentFollowers = parseInt(followers.innerText);
        if(followBtn.classList.contains('activeFollowBtn')) {
            followBtn.innerText = "Unfollow";
            currentFollowers++;
        } else {
            followBtn.innerText = "Follow";
            currentFollowers--;
        }
        followers.innerText = currentFollowers;
    },

    changeTab: function(targetBtn, currentTab) {
        helperFunctions.removeActiveClassFromBtn();
        targetBtn.classList.add('active');
        helperFunctions.addHiddenClassToContainers();
        currentTab.classList.remove('hidden');
    },

    likeCommentBtn: function(icon, className, numberOfCounts) {
        helperFunctions.toggleClass(icon, className);
        helperFunctions.updateCount(numberOfCounts, icon, className);
    }
}

const helperFunctions = {
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
    },

    toggleClass: function(element, className) {
        element.classList.toggle(className);
    }
}

export {eventListeners};