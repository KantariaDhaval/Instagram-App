const postsContainer = document.getElementById("postsContainer");

const posts = JSON.parse(postsData);
console.log(posts);

posts.forEach(post => {
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
    postHoverLikeBtn.id = "likeBtn";
    postHoverLikeBtn.innerHTML = `<i class="postHoverIcon fas fa-heart"></i>`;

    const postHoverCommentBtn = document.createElement("button");
    postHoverCommentBtn.classList.add("postHoverBtn");
    postHoverCommentBtn.id = "commentBtn";
    postHoverCommentBtn.innerHTML = `<i class="postHoverIcon fas fa-comment"></i>`;

    likesAndCommentsDiv.appendChild(postHoverLikeBtn);
    likesAndCommentsDiv.appendChild(postHoverCommentBtn);

    postDiv.appendChild(postImage);
    postDiv.appendChild(likesAndCommentsDiv);

    postsContainer.appendChild(postDiv);
});