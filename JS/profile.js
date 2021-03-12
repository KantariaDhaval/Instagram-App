(function () {

async function fetchProfileData() {
    await fetch('./../JSON/profileData.JSON')
            .then((response) => response.json())
            .then((data) => {
                showProfileData(data[0]);
            });
}

fetchProfileData();

function showProfileData(profileData) {

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

const followBtn = document.getElementById('followBtn');

followBtn.addEventListener('click', (e) => {
    e.preventDefault();

    followBtn.classList.toggle('activeFollowBtn');
    let currentFollowers = parseInt(followers.innerText);
    if(followBtn.classList.contains('activeFollowBtn')) {
        followBtn.innerText = "Unfollow";
        currentFollowers++;
    } else {
        followBtn.innerText = "Follow";
        currentFollowers--;
    }
    followers.innerText = currentFollowers;
})


})();