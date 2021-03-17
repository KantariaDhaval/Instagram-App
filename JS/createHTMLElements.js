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
    photoHoverLikeBtn.id = "likeBtn" + photo.id;
    
    const photoHoverLikeIcon = createAndAddLikeIcon(photo, photoHoverLikeBtn);
    
    const numberOfLikes = createAndAddLikeCountSpan(photo, photoHoverLikeBtn);

    container.appendChild(photoHoverLikeBtn);

    photoHoverLikeBtn.addEventListener('click', () => {
        photoHoverLikeIcon.classList.toggle('activeLikeIcon');

        updateCount(numberOfLikes, photoHoverLikeIcon, 'activeLikeIcon');
    })
}

function createAndAddLikeIcon(photo, container) {
    const photoHoverLikeIcon = document.createElement("i");
    photoHoverLikeIcon.classList.add("photoHoverIcon");
    photoHoverLikeIcon.classList.add("fas");
    photoHoverLikeIcon.classList.add("fa-heart");
    photoHoverLikeIcon.id = "likeIcon" + photo.id;
    
    container.appendChild(photoHoverLikeIcon);
    return photoHoverLikeIcon;
}

function createAndAddLikeCountSpan(photo, container) {
    const numberOfLikes = document.createElement("span");
    numberOfLikes.innerText = photo.numberOfLikes;
    numberOfLikes.id = "numberOfLikes" + photo.id;

    container.appendChild(numberOfLikes);
    return numberOfLikes;
}

function createAndAddCommentBtn(photo, container) {
    const photoHoverCommentBtn = document.createElement("button");
    photoHoverCommentBtn.classList.add("photoHoverBtn");
    photoHoverCommentBtn.classList.add("commentBtn");
    photoHoverCommentBtn.id = "commentBtn" + photo.id;
    
    const photoHoverCommentIcon = createAndAddCommentIcon(photo, photoHoverCommentBtn);

    const numberOfComments = createAndAddcommentCountSpan(photo, photoHoverCommentBtn);
    
    container.appendChild(photoHoverCommentBtn);

    photoHoverCommentBtn.addEventListener('click', () => {
        photoHoverCommentIcon.classList.toggle('activeCommentIcon');

        updateCount(numberOfComments, photoHoverCommentIcon, 'activeCommentIcon');      
    })
}

function createAndAddCommentIcon(photo, container) {
    const photoHoverCommentIcon = document.createElement("i");
    photoHoverCommentIcon.classList.add("photoHoverIcon");
    photoHoverCommentIcon.classList.add("fas");
    photoHoverCommentIcon.classList.add("fa-comment");
    photoHoverCommentIcon.id = "commentIcon" + photo.id;

    container.appendChild(photoHoverCommentIcon);
    return photoHoverCommentIcon;
}

function createAndAddcommentCountSpan(photo, container) {
    const numberOfComments = document.createElement("span");
    numberOfComments.innerText = photo.numberOfComments;
    numberOfComments.id = "numberOfComments" + photo.id;
    
    container.appendChild(numberOfComments);
    return numberOfComments;
}

function updateCount(currentCount, countElement, checkClass) {
    let count = parseInt(currentCount.innerText);
    if(countElement.classList.contains(checkClass)) {
        count++;
    } else {
        count--;
    }
    currentCount.innerText = count;
}

function createAndAddListElement(info, container) {
    const listElement = document.createElement('li');
    listElement.classList.add('infoPage');
    listElement.id = info.name;

    container.appendChild(listElement);
    return listElement;
}

function createAndAddLinkElement(info, container) {
    const linkElement = document.createElement('a');
    linkElement.classList.add('infoPageLink');
    linkElement.href = info.infoLink;
    linkElement.innerText = info.name;

    container.appendChild(linkElement);
}

function createAndAddOption(language, container) {
    const optionElement = document.createElement('option');
    optionElement.value = language;
    optionElement.innerText = language;

    container.appendChild(optionElement);
}

export {createAndAddPostContainer, createAndAddLikeAndCommentContainer, createAndAddImage, createAndAddVideo, createAndAddLikeBtn, createAndAddCommentBtn, createAndAddListElement, createAndAddLinkElement, createAndAddOption};