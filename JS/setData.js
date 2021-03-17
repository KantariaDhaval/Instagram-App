import {createAndAddPostContainer, createAndAddLikeAndCommentContainer, createAndAddImage, createAndAddVideo, createAndAddLikeBtn,  createAndAddCommentBtn} from './createHTMLElements.js';

function setProfileData(profileData) {

    // PROFILE PHOTO ICON IN HEADER
    const profilePhotoIcon = document.getElementById("profilePhotoIcon");
    profilePhotoIcon.src = profileData.profilePhotoLink;

    // SHOW ALL PROFILE CONTENT
    const profilePhoto = document.getElementById('profilePhoto');
    const handleName = document.getElementById('handleName');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const username = document.getElementById('username');
    const designation = document.getElementById('designation');
    const bio = document.getElementById('bio');
    const websiteLink = document.getElementById('websiteLink');

    // SET VALUES OF PROFILE DATA
    profilePhoto.src = profileData.profilePhotoLink;
    handleName.innerText = profileData.handleName;
    numberOfPhotos.innerText = profileData.numberOfPhotos;
    followers.innerText = profileData.followers;
    following.innerText = profileData.following;
    username.innerText = profileData.username;
    designation.innerText = profileData.designation;
    bio.innerText = profileData.bio;
    websiteLink.href = profileData.websiteLink;
    websiteLink.innerText = profileData.websiteLink;
}

function setPhotosData(photosData, container) {
    photosData.forEach(photo => {
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

export  {setProfileData, setPhotosData};