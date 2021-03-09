const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");

// FUNCTION FOR FETCHING PROFILE DATA 
async function fetchProfileData() {
    await fetch('./profileData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showProfileData(data[0]);
            });
}

// FUNCTION FOR FETCHING POSTS DATA FROM JSON FILE AND SHOW IT 
async function fetchPostData() {
    await fetch('./postsData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showPostsData(data);
            });
}

fetchProfileData();
fetchPostData();

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

function showPostsData(postsData) {
    postsData.forEach(post => {
        // POST CONTAINER
        const postDiv = document.createElement("div");
        postDiv.classList.add("postImage");
        
        // POST IMAGE
        const postImage = document.createElement("img");
        postImage.classList.add("post");
        postImage.src = post.postImageLink;
        postImage.alt = post.alt;
    
        // SHOW LIKES AND COMMENTS WHEN HOVER ON IMAGE
        const likesAndCommentsDiv = document.createElement("div");
        likesAndCommentsDiv.classList.add("likesAndComments");
    

        // ***** POST HOVER CONTENT *****
        // LIKES WHEN HOVER
        const postHoverLikeBtn = document.createElement("button");
        postHoverLikeBtn.classList.add("postHoverBtn");
        
        // ICON FOR LIKE
        const postHoverLikeIcon = document.createElement("i");
        postHoverLikeIcon.classList.add("postHoverIcon");
        postHoverLikeIcon.classList.add("fas");
        postHoverLikeIcon.classList.add("fa-heart");
    
        // NUMBER OF LIKES
        const numberOfLikes = document.createElement("span");
        numberOfLikes.innerText = post.numberOfLikes;
        numberOfLikes.id = "numberOfLikes";
        
        // COMMENTS WHEN HOVER
        const postHoverCommentBtn = document.createElement("button");
        postHoverCommentBtn.classList.add("postHoverBtn");
        
        // ICON FOR COMMENT
        const postHoverCommentIcon = document.createElement("i");
        postHoverCommentIcon.classList.add("postHoverIcon");
        postHoverCommentIcon.classList.add("fas");
        postHoverCommentIcon.classList.add("fa-comment");
    
        // NUMBER OF COMMENTS
        const numberOfComments = document.createElement("span");
        numberOfComments.innerText = post.numberOfComments;
        numberOfComments.id = "numberOfComments";
        
        
        // **** APPEND ALL ELEMENTS TO THEIR PARENTS ****
        postHoverLikeBtn.appendChild(postHoverLikeIcon);
        postHoverLikeBtn.appendChild(numberOfLikes);
    
        postHoverCommentBtn.appendChild(postHoverCommentIcon);
        postHoverCommentBtn.appendChild(numberOfComments);

        likesAndCommentsDiv.appendChild(postHoverLikeBtn);
        likesAndCommentsDiv.appendChild(postHoverCommentBtn);
    
        postDiv.appendChild(postImage);
        postDiv.appendChild(likesAndCommentsDiv);
    
        postsContainer.appendChild(postDiv);
    });
}