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
        photoHoverLikeBtn.id = "likeBtn" + photo.id;
        
        // ICON FOR LIKE
        const photoHoverLikeIcon = document.createElement("i");
        photoHoverLikeIcon.classList.add("photoHoverIcon");
        photoHoverLikeIcon.classList.add("fas");
        photoHoverLikeIcon.classList.add("fa-heart");
        photoHoverLikeIcon.id = "likeIcon" + photo.id;
    
        // NUMBER OF LIKES
        const numberOfLikes = document.createElement("span");
        numberOfLikes.innerText = photo.numberOfLikes;
        numberOfLikes.id = "numberOfLikes" + photo.id;
        
        // COMMENTS WHEN HOVER
        const photoHoverCommentBtn = document.createElement("button");
        photoHoverCommentBtn.classList.add("photoHoverBtn");
        photoHoverCommentBtn.id = "commentBtn" + photo.id;
        
        // ICON FOR COMMENT
        const photoHoverCommentIcon = document.createElement("i");
        photoHoverCommentIcon.classList.add("photoHoverIcon");
        photoHoverCommentIcon.classList.add("fas");
        photoHoverCommentIcon.classList.add("fa-comment");
        photoHoverCommentIcon.id = "commentIcon" + photo.id;
    
        // NUMBER OF COMMENTS
        const numberOfComments = document.createElement("span");
        numberOfComments.innerText = photo.numberOfComments;
        numberOfComments.id = "numberOfComments" + photo.id;
        
        
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


        photoHoverLikeBtn.addEventListener('click', (e) => {
            e.preventDefault();

            photoHoverLikeIcon.classList.toggle('activeLikeIcon');
        })
    });
}

function showIgtvData(photosData, container) {
    photosData.forEach(photo => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photoImage");
        
        const videoElement = document.createElement('video');
        videoElement.classList.add('photo');
        videoElement.controls = true;
        videoElement.innerText = "Video is not supported";

        const sourceElement = document.createElement('source');
        sourceElement.src = photo.photoImageLink;

        videoElement.appendChild(sourceElement);
        photoDiv.appendChild(videoElement);
        container.appendChild(photoDiv);
    })
}


})();