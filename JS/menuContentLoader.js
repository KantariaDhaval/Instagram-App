import {createAndAddPostContainer, createAndAddLikeAndCommentContainer, createAndAddImage, createAndAddVideo, createAndAddLikeBtn, createAndAddLikeIcon, createAndAddLikeCountSpan, createAndAddCommentBtn, createAndAddCommentIcon, createAndAddcommentCountSpan, updateCount} from './createHTMLElements.js';


// IIFE
(function () {

const profileContainer = document.getElementById('profileContainer');
const postsContainer = document.getElementById("postsContainer");
const igtvContainer = document.getElementById("igtvContainer");
const savedContainer = document.getElementById("savedContainer");
const taggedContainer = document.getElementById("taggedContainer");


async function fetchData() {
    await fetch('./../JSON/Data.JSON')
            .then((response) => response.json())
            .then((data) => {
                numberOfPhotos.innerText = data.postsData.length;
                numberOfPosts = data.postsData.length;
                numberOfIgtvs = data.igtvData.length;
                numberOfSaved = data.savedData.length;
                numberOfTagged = data.taggedData.length;
                showPhotosData(data.postsData, postsContainer);
                showIgtvData(data.igtvData, igtvContainer);
                showPhotosData(data.savedData, savedContainer);
                showPhotosData(data.taggedData, taggedContainer);
            });
}

fetchData();


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

})();