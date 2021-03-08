const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");
let profileData, postsData;

// const posts = JSON.parse(postsData);
async function fetchProfileData() {
    await fetch('./profileData.JSON')
            .then((response) => response.json())
            .then((data) => {
                profileData = data[0];
            });

    // console.log(profileData);

    const profilePhotoIcon = document.getElementById("profilePhotoIcon");
    profilePhotoIcon.src = profileData.profilePhoto;

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


async function fetchPostData() {
    await fetch('./postsData.JSON')
                    .then((response) => response.json())
                    .then((data) => {
                        postsData = data;
                    });
    // console.log(postData);

    postsData.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("postImage");
        
        const postImage = document.createElement("img");
        postImage.classList.add("post");
        postImage.src = post.postImageLink;
        postImage.alt = post.alt;
    
        const likesAndCommentsDiv = document.createElement("div");
        likesAndCommentsDiv.classList.add("likesAndComments");
    
        const postHoverLikeBtn = document.createElement("button");
        postHoverLikeBtn.classList.add("postHoverBtn");
        
        const postHoverLikeIcon = document.createElement("i");
        postHoverLikeIcon.classList.add("postHoverIcon");
        postHoverLikeIcon.classList.add("fas");
        postHoverLikeIcon.classList.add("fa-heart");
    
        const numberOfLikes = document.createElement("span");
        numberOfLikes.innerText = post.numberOfLikes;
        
    
        const postHoverCommentBtn = document.createElement("button");
        postHoverCommentBtn.classList.add("postHoverBtn");
        
        const postHoverCommentIcon = document.createElement("i");
        postHoverCommentIcon.classList.add("postHoverIcon");
        postHoverCommentIcon.classList.add("fas");
        postHoverCommentIcon.classList.add("fa-comment");
    
        const numberOfComments = document.createElement("span");
        numberOfComments.innerText = post.numberOfComments;
        
        // postHoverLikeBtn.innerText = post.numberOfLikes;
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


fetchProfileData();
fetchPostData();
