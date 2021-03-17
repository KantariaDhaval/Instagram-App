import {createAndAddListElement, createAndAddLinkElement, createAndAddOption} from './createHTMLElements.js';

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
const languagesContainer = document.getElementById('selectLanguages');

listOfInfos.forEach(info => {
    const listElement = createAndAddListElement(info, listsOfInfoContainer);

    createAndAddLinkElement(info, listElement);
})

languages.forEach(language => {
    createAndAddOption(language, languagesContainer);
})

})();