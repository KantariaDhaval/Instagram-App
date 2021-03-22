let postsModel = {

    postsData: [],
    igtvData: [],
    savedData: [],
    taggedData: [],
    activeTab: "POSTS",

    getActiveTab: function() {
        return this.activeTab;
    },

    changeActiveTab: function(currentTab) {
        this.activeTab = currentTab;
    },

    toggleIsLiked: function(dataType, index) {
        const currentPost = this[dataType][index - 1];
        currentPost.isLiked = !currentPost.isLiked;
        if(currentPost.isLiked) {
            currentPost.numberOfLikes++;
        } else {
            currentPost.numberOfLikes--;
        }
        return currentPost.isLiked;
    },

    toggleIsCommented: function(dataType, index) {
        const currentPost = this[dataType][index - 1];
        currentPost.isCommented = !currentPost.isCommented;
        if(currentPost.isCommented) {
            currentPost.numberOfComments++;
        } else {
            currentPost.numberOfComments--;
        }
        return currentPost.isCommented;
    },

    getNumberOfLikes: function(dataType, index) {
        return this[dataType][index - 1].numberOfLikes;
    },

    getNumberOfComments: function(dataType, index) {
        return this[dataType][index - 1].numberOfComments;
    }
}

export {postsModel};