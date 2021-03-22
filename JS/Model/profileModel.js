let profileModel = {
    data: [],

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