let postsModel = {

    postsData: [],
    igtvData: [],
    savedData: [],
    taggedData: [],
    activeTab: "POSTS",

    setPostsData: function(data) {
        this.postsData = data;
    },

    setIgtvData: function(data) {
        this.igtvData = data;
    },

    setSavedData: function(data) {
        this.savedData = data;
    },

    setTaggedData: function(data) {
        this.taggedData = data;
    },

    getActiveTab: function() {
        return this.activeTab;
    },

    setActiveTab: function(currentTab) {
        this.activeTab = currentTab;
    },

    togglePostLiked: function(dataType, index) {
        const currentPost = this[dataType][index - 1];
        currentPost.isLiked = !currentPost.isLiked;
        if(currentPost.isLiked) {
            currentPost.numberOfLikes++;
        } else {
            currentPost.numberOfLikes--;
        }
        return currentPost.isLiked;
    },

    togglePostCommented: function(dataType, index) {
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