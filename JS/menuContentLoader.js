// VARIABLES WHICH WILL BE USED IN ALL JS FILES
const numberOfPhotos = document.getElementById('photosNumber');
let numberOfPosts, numberOfIgtvs, numberOfSaved, numberOfTagged;

// IIFE
(function () {

const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");
const igtvContainer = document.getElementById("igtvContainer");
const savedContainer = document.getElementById("savedContainer");
const taggedContainer = document.getElementById("taggedContainer");


async function fetchPostData() {
    await fetch('./../JSON/postsData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfPhotos.innerText = data.length;
                numberOfPosts = data.length;
                showPhotosData(data, postsContainer);
            });
}

async function fetchIgtvData() {
    await fetch('./../JSON/igtvData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfIgtvs = data.length;
                showIgtvData(data, igtvContainer);
            });
}

async function fetchSavedData() {
    await fetch('./../JSON/savedData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfSaved = data.length;
                showPhotosData(data, savedContainer);
            });
}

async function fetchTaggedData() {
    await fetch('./../JSON/taggedData.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfTagged = data.length;
                showPhotosData(data, taggedContainer);
            });
}

fetchPostData();
fetchIgtvData();
fetchSavedData();
fetchTaggedData();


function showPhotosData(photosData, container) {
    photosData.forEach(photo => {
        const photoDiv = createAndAddPostContainer(container);
        
        createAndAddImage(photo, photoDiv);
        
        const likesAndCommentsDiv = createAndAddLikeAndCommentContainer(photoDiv);
    
        createAndAddLikeBtn(photo, likesAndCommentsDiv);
        
        createAndAddCommentBtn(photo, likesAndCommentsDiv);
    });
}

function showIgtvData(photosData, container) {
    photosData.forEach(photo => {
        const photoDiv = createAndAddPostContainer(container);
        
        createAndAddVideo(photo, photoDiv);
        
        const likesAndCommentsDiv = createAndAddLikeAndCommentContainer(photoDiv);
    
        createAndAddLikeBtn(photo, likesAndCommentsDiv);
        
        createAndAddCommentBtn(photo, likesAndCommentsDiv);
    })
}

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

})();