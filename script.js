const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");
const igtvContainer = document.getElementById("igtvContainer");
const savedContainer = document.getElementById("savedContainer");
const taggedContainer = document.getElementById("taggedContainer");
const numberOfPhotos = document.getElementById('photosNumber');

let numberOfPosts, numberOfIgtvs, numberOfSaved, numberOfTagged;
// FUNCTION FOR FETCHING PROFILE DATA 
async function fetchProfileData() {
    await fetch('./profileData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showProfileData(data[0]);
            });
}

async function fetchPostData() {
    await fetch('./postsData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfPhotos.innerText = data.length;
                // console.log(numberOfPhotos.innerText);
                // console.log(data.length);
                numberOfPosts = data.length;
                showPostsData(data, postsContainer);
            });
}

async function fetchIgtvData() {
    await fetch('./igtvData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfIgtvs = data.length;
                // console.log(data.length);
                showPostsData(data, igtvContainer);
            });
}

async function fetchSavedData() {
    await fetch('./savedData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfSaved = data.length;
                // console.log(data.length);
                showPostsData(data, savedContainer);
            });
}

async function fetchTaggedData() {
    await fetch('./taggedData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfTagged = data.length;
                // console.log(data.length);
                showPostsData(data, taggedContainer);
            });
}

fetchProfileData();
fetchPostData();
fetchIgtvData();
fetchSavedData();
fetchTaggedData();

function showProfileData(profileData) {

    // PROFILE PHOTO ICON IN HEADER
    const profilePhotoIcon = document.getElementById("profilePhotoIcon");
    profilePhotoIcon.src = profileData.profilePhotoLink;

    // SHOW ALL PROFILE CONTENT

    // profileContainer.innerHTML = `
    //     <div class="profilePhoto">
    //         <img src=${profileData.profilePhotoLink} id="profilePhoto" alt=${profileData.alt}>
    //     </div>
    //     <div class="profileData">
    //         <div class="handle">
    //             <div id="handleName"><h2>${profileData.handleName}</h2></div>
    //             <button id="editProfileBtn">Edit Profile</button>
    //             <button id="settingBtn"><i class="fas fa-cog"></i></button>
    //         </div>
    //         <div class="accountDetails">
    //             <p class="accountDetailContainer"><span class="accountDetail" id="photosNumber">${profileData.numberOfPhotos}</span>posts</p>
    //             <p class="accountDetailContainer"><span class="accountDetail" id="followers">${profileData.followers}</span>followers</p>
    //             <p class="accountDetailContainer"><span class="accountDetail" id="following">${profileData.following}</span>following</p>
    //         </div>
    //         <div id="username">
    //             <h3>${profileData.username}</h3>
    //         </div>
    //     </div>
    // `;
    const profilePhoto = document.getElementById('profilePhoto');
    const handleName = document.getElementById('handleName');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const username = document.getElementById('username');

    profilePhoto.src = profileData.profilePhotoLink;
    handleName.innerText = profileData.handleName;
    numberOfPhotos.innerText = profileData.numberOfPhotos;
    followers.innerText = profileData.followers;
    following.innerText = profileData.following;
    username.innerText = profileData.username;
}

function showPostsData(photosData, container) {
    photosData.forEach(photo => {
        // POST CONTAINER
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photoImage");
        
        // POST IMAGE
        const photoImage = document.createElement("img");
        photoImage.classList.add("photo");
        photoImage.src = photo.photoImageLink;
        photoImage.alt = photo.alt;
    
        // SHOW LIKES AND COMMENTS WHEN HOVER ON IMAGE
        const likesAndCommentsDiv = document.createElement("div");
        likesAndCommentsDiv.classList.add("likesAndComments");
    

        // ***** POST HOVER CONTENT *****
        // LIKES WHEN HOVER
        const photoHoverLikeBtn = document.createElement("button");
        photoHoverLikeBtn.classList.add("photoHoverBtn");
        
        // ICON FOR LIKE
        const photoHoverLikeIcon = document.createElement("i");
        photoHoverLikeIcon.classList.add("photoHoverIcon");
        photoHoverLikeIcon.classList.add("fas");
        photoHoverLikeIcon.classList.add("fa-heart");
    
        // NUMBER OF LIKES
        const numberOfLikes = document.createElement("span");
        numberOfLikes.innerText = photo.numberOfLikes;
        numberOfLikes.id = "numberOfLikes";
        
        // COMMENTS WHEN HOVER
        const photoHoverCommentBtn = document.createElement("button");
        photoHoverCommentBtn.classList.add("photoHoverBtn");
        
        // ICON FOR COMMENT
        const photoHoverCommentIcon = document.createElement("i");
        photoHoverCommentIcon.classList.add("photoHoverIcon");
        photoHoverCommentIcon.classList.add("fas");
        photoHoverCommentIcon.classList.add("fa-comment");
    
        // NUMBER OF COMMENTS
        const numberOfComments = document.createElement("span");
        numberOfComments.innerText = photo.numberOfComments;
        numberOfComments.id = "numberOfComments";
        
        
        // **** APPEND ALL ELEMENTS TO THEIR PARENTS ****
        photoHoverLikeBtn.appendChild(photoHoverLikeIcon);
        photoHoverLikeBtn.appendChild(numberOfLikes);
    
        photoHoverCommentBtn.appendChild(photoHoverCommentIcon);
        photoHoverCommentBtn.appendChild(numberOfComments);

        likesAndCommentsDiv.appendChild(photoHoverLikeBtn);
        likesAndCommentsDiv.appendChild(photoHoverCommentBtn);
    
        photoDiv.appendChild(photoImage);
        photoDiv.appendChild(likesAndCommentsDiv);
    
        container.appendChild(photoDiv);
    });
}


// ******* EVENT LISTENERS *******

const postsBtn = document.getElementById('postsBtn');
const igtvBtn = document.getElementById('igtvBtn');
const savedBtn = document.getElementById('savedBtn');
const taggedBtn = document.getElementById('taggedBtn');
const posts = document.getElementById('posts');
const igtv = document.getElementById('igtv');
const saved = document.getElementById('saved');
const tagged = document.getElementById('tagged');
const followBtn = document.getElementById('followBtn');


postsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    posts.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfPosts;
    // console.log(numberOfPosts);
})

igtvBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    igtv.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfIgtvs;
    // console.log(numberOfIgtvs);
})

savedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    saved.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfSaved;
    // console.log(numberOfSaved);
})

taggedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    tagged.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfTagged;
    // console.log(numberOfTagged);
})

followBtn.addEventListener('click', (e) => {
    e.preventDefault();

    followBtn.classList.toggle('activeFollowBtn');
    if(followBtn.classList.contains('activeFollowBtn')) {
        followBtn.innerText = "Unfollow";
    } else {
        followBtn.innerText = "Follow";
    }
})

function addActiveClassToBtn(targetBtn) {
    postsBtn.classList.remove('active');
    igtvBtn.classList.remove('active');
    savedBtn.classList.remove('active');
    taggedBtn.classList.remove('active');

    targetBtn.classList.add('active');
}

function addHiddenClassToContainers(targetBtn) {
    posts.classList.add('hidden');
    igtv.classList.add('hidden');
    saved.classList.add('hidden');
    tagged.classList.add('hidden');
}

