(function () {

const postsBtn = document.getElementById('postsBtn');
const igtvBtn = document.getElementById('igtvBtn');
const savedBtn = document.getElementById('savedBtn');
const taggedBtn = document.getElementById('taggedBtn');
const posts = document.getElementById('posts');
const igtv = document.getElementById('igtv');
const saved = document.getElementById('saved');
const tagged = document.getElementById('tagged');

postsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    posts.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfPosts;
})

igtvBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    igtv.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfIgtvs;
})

savedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    saved.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfSaved;
})

taggedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addActiveClassToBtn(e.target);
    addHiddenClassToContainers(e.target);
    tagged.classList.remove('hidden');
    numberOfPhotos.innerText = numberOfTagged;
})


function addActiveClassToBtn(targetBtn) {
    postsBtn.classList.remove('active');
    igtvBtn.classList.remove('active');
    savedBtn.classList.remove('active');
    taggedBtn.classList.remove('active');

    targetBtn.classList.add('active');
}

function addHiddenClassToContainers(targetBtn) {
    posts.classList.add('hidden');
    igtv.classList.add('hidden');
    saved.classList.add('hidden');
    tagged.classList.add('hidden');
}

})();