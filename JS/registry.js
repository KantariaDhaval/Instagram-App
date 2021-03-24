const DOMElements = {
    POSTS_BTN: document.getElementById('postsBtn'),
    IGTV_BTN: document.getElementById('igtvBtn'),
    SAVED_BTN: document.getElementById('savedBtn'),
    TAGGED_BTN: document.getElementById('taggedBtn'),
    POSTS: document.getElementById('posts'),
    IGTV: document.getElementById('igtv'),
    SAVED: document.getElementById('saved'),
    TAGGED: document.getElementById('tagged'),
    POSTS_CONTAINER: document.getElementById('postsContainer'),
    IGTV_CONTAINER: document.getElementById('igtvContainer'),
    SAVED_CONTAINER: document.getElementById('savedContainer'),
    TAGGED_CONTAINER: document.getElementById('taggedContainer')
};

const classes = {
    ACTIVE: 'active',
    HIDDEN: 'hidden',
    ACTIVE_LIKE_ICON: 'activeLikeIcon',
    ACTIVE_COMMENT_ICON: 'activeCommentIcon',
    ACTIVE_FOLLOW_BTN: 'activeFollowBtn',
    PHOTO_IMAGE: 'photoImage',
    LIKES_AND_COMMENTS: 'likesAndComments',
    PHOTO: 'photo',
    PHOTO_HOVER_BTN: 'photoHoverBtn',
    PHOTO_HOVER_ICON: 'photoHoverIcon',
    LIKE_BTN: 'likeBtn',
    COMMENT_BTN: 'commentBtn',
    NUMBER_OF_COUNTS: 'numberOfCounts',
    INFO_PAGE: 'infoPage',
    INFO_PAGE_LINK: 'infoPageLink'
};

const btnTypes = {
    POSTS: "POSTS",
    IGTV: "IGTV",
    SAVED: "SAVED",
    TAGGED: "TAGGED",
    LIKE_ICON: "likeIcon",
    COMMENT_ICON: "commentIcon",
    LIKE_OR_COMMENT_BTN: "likeOrCommentBtn"
}

export {DOMElements, classes, btnTypes};