(function() {

const followBtn = document.getElementById('followBtn');
const messageBtn = document.getElementById('messageBtn');
const dropdownBtn = document.getElementById('dropdownBtn');

followBtn.addEventListener('click', (e) => {
    
    followBtn.classList.toggle('activeFollowBtn');
    messageBtn.classList.toggle('hidden');
    dropdownBtn.classList.toggle('activeFollowBtn');

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

})()