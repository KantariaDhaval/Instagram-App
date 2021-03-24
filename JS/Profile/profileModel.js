const profileModel = {
    // DEFAULT DATA
    data: {
        "profilePhotoLink": "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "alt": "Profile Photo",
        "handleName": "Handle name",
        "numberOfPosts": 0,
        "followers": 0,
        "following": 0,
        "username": "Username",
        "designation": "Designation",
        "bio": "Bio",
        "websiteLink": "Website",
        "isFollowed": false
    },

    setData: function(data) {
        this.data = data;
    },

    setNumberOfPosts: function(numberOfPosts) {
        this.data.numberOfPosts = numberOfPosts;
    },

    toggleFollow: function() {
        this.data.isFollowed = !this.data.isFollowed;
        if(this.data.isFollowed) {
            this.data.followers++;
        } else {
            this.data.followers--;
        }
        return this.data.isFollowed;
    },

    getNumberOfFollowers: function() {
        return this.data.followers;
    }
}

export {profileModel};