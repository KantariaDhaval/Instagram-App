const postsContainer = document.getElementById("postsContainer");
let postsData;

// const posts = JSON.parse(postsData);
async function fetchData() {
    await fetch('./postsData.JSON')
                    .then((respond) => respond.json())
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
        likesAndCommentsDiv.classList.add("likes");
    
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
fetchData();

