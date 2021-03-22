let buildPosts = (function() {

    function createAndAddPostContainer(container) {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photoImage");

        container.appendChild(photoDiv);
        return photoDiv;
    }

    function createAndAddLikeAndCommentContainer(container) {
        const likesAndCommentsDiv = document.createElement("div");
        likesAndCommentsDiv.classList.add("likesAndComments");
        
        container.appendChild(likesAndCommentsDiv);
        return likesAndCommentsDiv;
    }

    function createAndAddImage(photo, container) {
        const photoImage = document.createElement("img");
        photoImage.classList.add("photo");
        photoImage.src = photo.photoImageLink;
        photoImage.alt = photo.alt;
        
        container.appendChild(photoImage);
    }

    function createAndAddVideo(photo, container) {
        const videoElement = document.createElement('video');
        videoElement.classList.add('photo');
        videoElement.controls = true;
        videoElement.innerText = "Video is not supported";

        const sourceElement = document.createElement('source');
        sourceElement.src = photo.photoImageLink;

        videoElement.appendChild(sourceElement);
        container.appendChild(videoElement);
    }

    function createAndAddLikeBtn(photo, container) {
        const photoHoverLikeBtn = document.createElement("button");
        photoHoverLikeBtn.classList.add("photoHoverBtn");
        photoHoverLikeBtn.classList.add("likeBtn");
        photoHoverLikeBtn.id = "likeBtn" + photo.dataType + photo.id;
        photoHoverLikeBtn.dataset.index = photo.id;
        photoHoverLikeBtn.dataType = photo.dataType;
        // console.log(photoHoverLikeBtn.dataset.index);
        
        const photoHoverLikeIcon = createAndAddLikeIcon(photo, photoHoverLikeBtn);
        
        const numberOfLikes = createAndAddLikeCountSpan(photo, photoHoverLikeBtn);

        container.appendChild(photoHoverLikeBtn);
    }

    function createAndAddLikeIcon(photo, container) {
        const photoHoverLikeIcon = document.createElement("i");
        photoHoverLikeIcon.classList.add("photoHoverIcon");
        photoHoverLikeIcon.classList.add("fas");
        photoHoverLikeIcon.classList.add("fa-heart");
        if(photo.isLiked) {
            photoHoverLikeIcon.classList.add('activeLikeIcon');
        }
        photoHoverLikeIcon.id = "likeIcon" + photo.id;
        
        container.appendChild(photoHoverLikeIcon);
        return photoHoverLikeIcon;
    }

    function createAndAddLikeCountSpan(photo, container) {
        const numberOfLikes = document.createElement("span");
        numberOfLikes.classList.add('numberOfCounts');
        numberOfLikes.innerText = photo.numberOfLikes;
        numberOfLikes.id = "numberOfLikes" + photo.id;

        container.appendChild(numberOfLikes);
        return numberOfLikes;
    }

    function createAndAddCommentBtn(photo, container) {
        const photoHoverCommentBtn = document.createElement("button");
        photoHoverCommentBtn.classList.add("photoHoverBtn");
        photoHoverCommentBtn.classList.add("commentBtn");
        photoHoverCommentBtn.id = "commentBtn" + photo.dataType + photo.id;
        photoHoverCommentBtn.dataset.index = photo.id;
        photoHoverCommentBtn.dataType = photo.dataType;
        
        const photoHoverCommentIcon = createAndAddCommentIcon(photo, photoHoverCommentBtn);

        const numberOfComments = createAndAddcommentCountSpan(photo, photoHoverCommentBtn);
        
        container.appendChild(photoHoverCommentBtn);
    }

    function createAndAddCommentIcon(photo, container) {
        const photoHoverCommentIcon = document.createElement("i");
        photoHoverCommentIcon.classList.add("photoHoverIcon");
        photoHoverCommentIcon.classList.add("fas");
        photoHoverCommentIcon.classList.add("fa-comment");
        if(photo.isCommented) {
            photoHoverCommentIcon.classList.add('activeCommentIcon');
        }
        photoHoverCommentIcon.id = "commentIcon" + photo.id;

        container.appendChild(photoHoverCommentIcon);
        return photoHoverCommentIcon;
    }

    function createAndAddcommentCountSpan(photo, container) {
        const numberOfComments = document.createElement("span");
        numberOfComments.classList.add('numberOfCounts');
        numberOfComments.innerText = photo.numberOfComments;
        numberOfComments.id = "numberOfComments" + photo.id;
        
        container.appendChild(numberOfComments);
        return numberOfComments;
    }

    return {
        build: function(data, container) {
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
    }

})();

export {buildPosts};