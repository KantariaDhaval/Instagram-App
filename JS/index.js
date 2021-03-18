import {buildPosts} from './buildPosts.js';
import {buildFooter} from './buildFooter.js';

const numberOfPhotos = document.getElementById('photosNumber');

var model = {
    fetchData: async function() {
        return await fetch('./../JSON/Data.JSON')
                .then((response) => response.json());
    },
    footerData: {
        listsOfInfo: [
            {
                "name": "About",
                "infoLink": ""
            },
            {
                "name": "Blog",
                "infoLink": ""
            },
            {
                "name": "Jobs",
                "infoLink": ""
            },
            {
                "name": "Help",
                "infoLink": ""
            },
            {
                "name": "API",
                "infoLink": ""
            },
            {
                "name": "Privacy",
                "infoLink": ""
            },
            {
                "name": "Terms",
                "infoLink": ""
            },
            {
                "name": "Top Accounts",
                "infoLink": ""
            },
            {
                "name": "Hashtag",
                "infoLink": ""
            },
            {
                "name": "Location",
                "infoLink": ""
            }
        ],
        languages: ["English", "English-UK", "French", "Spanish", "German", "Hindi", "Gujarati"]
    }
};

var profileView = {
    init: function(data) {
        this.profilePhotoIcon = document.getElementById("profilePhotoIcon");
        this.profilePhoto = document.getElementById('profilePhoto');
        this.handleName = document.getElementById('handleName');
        this.followers = document.getElementById('followers');
        this.following = document.getElementById('following');
        this.username = document.getElementById('username');
        this.designation = document.getElementById('designation');
        this.bio = document.getElementById('bio');
        this.websiteLink = document.getElementById('websiteLink');

        this.render(data);
    },

    render: function(data) {
        this.profilePhotoIcon.src = data.profilePhotoLink;

        this.profilePhoto.src = data.profilePhotoLink;
        this.handleName.innerText = data.handleName;
        this.followers.innerText = data.followers;
        this.following.innerText = data.following;
        this.username.innerText = data.username;
        this.designation.innerText = data.designation;
        this.bio.innerText = data.bio;
        this.websiteLink.href = data.websiteLink;
        this.websiteLink.innerText = data.websiteLink;
    }
};

var postsView = {
    init: function(data) {
        numberOfPhotos.innerText = data.postsData.length;
        this.postsContainer = document.getElementById('postsContainer');
        this.igtvContainer = document.getElementById('igtvContainer');
        this.savedContainer = document.getElementById('savedContainer');
        this.taggedContainer = document.getElementById('taggedContainer');
        
        this.render(data);
    },

    render: function(data) {
        buildPosts.build(data.postsData, postsContainer);
        buildPosts.build(data.igtvData, igtvContainer);
        buildPosts.build(data.savedData, savedContainer);
        buildPosts.build(data.taggedData, taggedContainer);
    }
};

var footerView = {
    init: function() {
        var data = controller.getFooterData();
        buildFooter.build(data);
    }
};

var controller = {
    init: function() {
        model.fetchData()
            .then(data => {
                // console.log(data);
                profileView.init(data.profileData);
                postsView.init(data);
            });

        footerView.init();
    },
    getFooterData: function() {
        return model.footerData;
    }
};

controller.init();