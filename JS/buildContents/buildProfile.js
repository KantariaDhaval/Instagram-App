const buildProfile = (function() {
    
    return {
        build: function(data) {
            const profileContainer = document.getElementById('profileContainer');
            profileContainer.innerHTML = `
                <div id="profilePhoto">
                    <img src=${data.profilePhotoLink} id="profilePhotoImage" alt="Profile Photo">
                </div>
                <div id="profileData">
                    <div id="handle">
                        <div id="handleName">
                            <h2>${data.handleName}</h2>
                        </div>
                        <button class="followBtn" id="followBtn" data-btntype="followBtn">
                            Follow
                        </button>
                        <button class="messageBtn hidden" id="messageBtn">
                            Message
                        </button>
                        <button class="dropdownBtn" id="dropdownBtn">
                            <i class="fas fa-caret-down"></i>
                        </button>
                    </div>
                    <div id="accountDetails">
                        <p class="accountDetailContainer">
                            <span class="accountDetail" id="numberOfPosts">
                                ${data.numberOfPosts}
                            </span>
                            posts
                        </p>
                        <p class="accountDetailContainer">
                            <span class="accountDetail" id="followers">
                                ${data.followers}
                            </span>
                            followers
                        </p>
                        <p class="accountDetailContainer">
                            <span class="accountDetail" id="following">
                                ${data.following}
                            </span>
                            following
                        </p>
                    </div>
                    <div id="otherDetails">
                        <div id="username">
                            <h3>${data.username}</h3>
                        </div>
                        <div id="designation">
                            ${data.designation} 
                        </div>
                        <div id="bio">
                            ${data.bio}
                        </div>
                        <div id="website">
                            <a href=${data.websiteLink} id="websiteLink">
                                ${data.websiteLink}
                            </a> 
                        </div>
                    </div>
                </div>
            `;
        }
    }
})();

export {buildProfile};