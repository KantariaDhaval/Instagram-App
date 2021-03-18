import {createAndAddPostContainer, createAndAddLikeAndCommentContainer, createAndAddImage, createAndAddVideo, createAndAddLikeBtn,  createAndAddCommentBtn, createAndAddListElement, createAndAddLinkElement, createAndAddOption} from './createHTMLElements.js';

const numberOfPhotos = document.getElementById('photosNumber');
let numberOfPosts, numberOfIgtvs, numberOfSaved, numberOfTagged;

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
        numberOfPosts = data.postsData.length;
        numberOfIgtvs = data.igtvData.length;
        numberOfSaved = data.savedData.length;
        numberOfTagged = data.taggedData.length;
        this.postsContainer = document.getElementById('postsContainer');
        this.igtvContainer = document.getElementById('igtvContainer');
        this.savedContainer = document.getElementById('savedContainer');
        this.taggedContainer = document.getElementById('taggedContainer');
        
        this.render(data);
    },

    render: function(data) {
        this.showData(data.postsData, postsContainer);
        this.showData(data.igtvData, igtvContainer);
        this.showData(data.savedData, savedContainer);
        this.showData(data.taggedData, taggedContainer);
    },

    showData: function(data, container) {
        data.forEach(photo => {
            const photoDiv = createAndAddPostContainer(container);
            
            if(photo.postType === "Image") {
                createAndAddImage(photo, photoDiv);
            } else {
                createAndAddVideo(photo, photoDiv);
            }
            
            const likesAndCommentsDiv = createAndAddLikeAndCommentContainer(photoDiv);
            createAndAddLikeBtn(photo, likesAndCommentsDiv);
            createAndAddCommentBtn(photo, likesAndCommentsDiv);
        });
    }
};

var footerView = {
    init: function() {
        this.listsOfInfoContainer = document.getElementById('listsOfInfo');
        this.languagesContainer = document.getElementById('selectLanguages');
        this.render();
    },
    render: function() {
        var data = controller.getFooterData();
        
        data.listsOfInfo.forEach(info => {
            const listElement = createAndAddListElement(info, this.listsOfInfoContainer);
            createAndAddLinkElement(info, listElement);
        })
        
        data.languages.forEach(language => {
            createAndAddOption(language, this.languagesContainer);
        })
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