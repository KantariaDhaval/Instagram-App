const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");
const igtvContainer = document.getElementById("igtvContainer");
const savedContainer = document.getElementById("savedContainer");
const taggedContainer = document.getElementById("taggedContainer");

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
                showPostsData(data, postsContainer);
            });
}

async function fetchIgtvData() {
    await fetch('./igtvData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showPostsData(data, igtvContainer);
            });
}

async function fetchSavedData() {
    await fetch('./savedData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showPostsData(data, savedContainer);
            });
}

async function fetchTaggedData() {
    await fetch('./taggedData.JSON')
            .then((response) => response.json())
            .then((data) => {
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
    profilePhotoIcon.src = profileData.profilePhoto;

    // SHOW ALL PROFILE CONTENT

    profileContainer.innerHTML = `
        <div class="profilePhoto">
            <img src=${profileData.profilePhoto} id="profilePhoto" alt=${profileData.alt}>
        </div>
        <div class="profileData">
            <div class="handle">
                <div id="handleName"><h2>${profileData.handleName}</h2></div>
                <button id="editProfileBtn">Edit Profile</button>
                <button id="settingBtn"><i class="fas fa-cog"></i></button>
            </div>
            <div class="accountDetails">
                <p class="accountDetailContainer"><span class="accountDetail" id="postsNumber">${profileData.numberOfPosts}</span>posts</p>
                <p class="accountDetailContainer"><span class="accountDetail" id="followers">${profileData.followers}</span>followers</p>
                <p class="accountDetailContainer"><span class="accountDetail" id="following">${profileData.following}</span>following</p>
            </div>
            <div id="username">
                <h3>${profileData.username}</h3>
            </div>
        </div>
    `;
}

function showPostsData(photosData, container) {
    photosData.forEach(photo => {
        // POST CONTAINER
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photoImage");
        
        // POST IMAGE
        const photoImage = document.createElement("img");
        photoImage.classList.add("photo");
        photoImage.src = photo.postImageLink;
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

postsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    posts.classList.remove('hidden');
})

igtvBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    igtv.classList.remove('hidden');
})

savedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    saved.classList.remove('hidden');
})

taggedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    tagged.classList.remove('hidden');
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