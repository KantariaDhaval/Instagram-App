import {btnTypes, classes} from './registry.js';

const buildPosts = (function() {

    function createAndAddPostContainer(container) {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add(classes.PHOTO_IMAGE);

        container.appendChild(photoDiv);
        return photoDiv;
    }

    function createAndAddLikeAndCommentContainer(container) {
        const likesAndCommentsDiv = document.createElement("div");
        likesAndCommentsDiv.classList.add(classes.LIKES_AND_COMMENTS);
        
        container.appendChild(likesAndCommentsDiv);
        return likesAndCommentsDiv;
    }

    function createAndAddImage(photo, container) {
        const photoImage = document.createElement("img");
        photoImage.classList.add(classes.PHOTO);
        photoImage.src = photo.photoImageLink;
        photoImage.alt = photo.alt;
        
        container.appendChild(photoImage);
    }

    function createAndAddVideo(photo, container) {
        const videoElement = document.createElement('video');
        videoElement.classList.add(classes.PHOTO);
        videoElement.controls = true;
        videoElement.innerText = "Video is not supported";

        const sourceElement = document.createElement('source');
        sourceElement.src = photo.photoImageLink;

        videoElement.appendChild(sourceElement);
        container.appendChild(videoElement);
    }

    function createAndAddLikeBtn(photo, container) {
        const photoHoverLikeBtn = document.createElement("button");
        photoHoverLikeBtn.classList.add(classes.PHOTO_HOVER_BTN);
        photoHoverLikeBtn.classList.add(classes.LIKE_BTN);
        photoHoverLikeBtn.id = "likeBtn" + photo.dataType + photo.id;
        photoHoverLikeBtn.dataset.index = photo.id;
        photoHoverLikeBtn.dataset.btntype = btnTypes.LIKE_OR_COMMENT_BTN;
        photoHoverLikeBtn.dataType = photo.dataType;
        
        createAndAddLikeIcon(photo, photoHoverLikeBtn);
        
        createAndAddLikeCountSpan(photo, photoHoverLikeBtn);

        container.appendChild(photoHoverLikeBtn);
    }

    function createAndAddLikeIcon(photo, container) {
        const photoHoverLikeIcon = document.createElement("i");
        photoHoverLikeIcon.classList.add(classes.PHOTO_HOVER_ICON);
        photoHoverLikeIcon.classList.add("fas");
        photoHoverLikeIcon.classList.add("fa-heart");
        photoHoverLikeIcon.dataset.btntype = btnTypes.LIKE_ICON;
        if(photo.isLiked) {
            photoHoverLikeIcon.classList.add(classes.ACTIVE_LIKE_ICON);
        }
        photoHoverLikeIcon.id = "likeIcon" + photo.id;
        
        container.appendChild(photoHoverLikeIcon);
        return photoHoverLikeIcon;
    }

    function createAndAddLikeCountSpan(photo, container) {
        const numberOfLikes = document.createElement("span");
        numberOfLikes.classList.add(classes.NUMBER_OF_COUNTS);
        numberOfLikes.innerText = photo.numberOfLikes;
        numberOfLikes.id = "numberOfLikes" + photo.id;

        container.appendChild(numberOfLikes);
        return numberOfLikes;
    }

    function createAndAddCommentBtn(photo, container) {
        const photoHoverCommentBtn = document.createElement("button");
        photoHoverCommentBtn.classList.add(classes.PHOTO_HOVER_BTN);
        photoHoverCommentBtn.classList.add(classes.COMMENT_BTN);
        photoHoverCommentBtn.id = "commentBtn" + photo.dataType + photo.id;
        photoHoverCommentBtn.dataset.index = photo.id;
        photoHoverCommentBtn.dataset.btntype = btnTypes.LIKE_OR_COMMENT_BTN;

        photoHoverCommentBtn.dataType = photo.dataType;
        
        createAndAddCommentIcon(photo, photoHoverCommentBtn);

        createAndAddcommentCountSpan(photo, photoHoverCommentBtn);
        
        container.appendChild(photoHoverCommentBtn);
    }

    function createAndAddCommentIcon(photo, container) {
        const photoHoverCommentIcon = document.createElement("i");
        photoHoverCommentIcon.classList.add(classes.PHOTO_HOVER_ICON);
        photoHoverCommentIcon.classList.add("fas");
        photoHoverCommentIcon.classList.add("fa-comment");
        photoHoverCommentIcon.dataset.btntype = btnTypes.COMMENT_ICON;

        if(photo.isCommented) {
            photoHoverCommentIcon.classList.add(classes.ACTIVE_COMMENT_ICON);
        }
        photoHoverCommentIcon.id = "commentIcon" + photo.id;

        container.appendChild(photoHoverCommentIcon);
        return photoHoverCommentIcon;
    }

    function createAndAddcommentCountSpan(photo, container) {
        const numberOfComments = document.createElement("span");
        numberOfComments.classList.add(classes.NUMBER_OF_COUNTS);
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