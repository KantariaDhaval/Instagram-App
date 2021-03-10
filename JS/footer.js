(function () {
    let listOfInfos = [
    {
        "name": "About",
        "infoLink": ""
    },
    {
        "name": "Blog",
        "infoLink": ""
    },
    {
        "name": "Jobs",
        "infoLink": ""
    },
    {
        "name": "Help",
        "infoLink": ""
    },
    {
        "name": "API",
        "infoLink": ""
    },
    {
        "name": "Privacy",
        "infoLink": ""
    },
    {
        "name": "Terms",
        "infoLink": ""
    },
    {
        "name": "Top Accounts",
        "infoLink": ""
    },
    {
        "name": "Hashtag",
        "infoLink": ""
    },
    {
        "name": "Location",
        "infoLink": ""
    }
]

let languages = ["English", "English-UK", "French", "Spanish", "German", "Hindi", "Gujarati"];

const listsOfInfoContainer = document.getElementById('listsOfInfo');
const languagesContainer = document.getElementById('languages');

listOfInfos.forEach(info => {
    const listElement = document.createElement('li');
    listElement.classList.add('infoPage');
    listElement.id = info.name;

    const linkElement = document.createElement('a');
    linkElement.classList.add('infoPageLink');
    linkElement.href = info.infoLink;
    linkElement.innerText = info.name;


    listElement.appendChild(linkElement);
    listsOfInfoContainer.appendChild(listElement);
})

languages.forEach(language => {
    const optionElement = document.createElement('option');
    optionElement.value = language;
    optionElement.innerText = language;

    languagesContainer.appendChild(optionElement);
})


})();