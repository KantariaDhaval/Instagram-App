import { classes } from "../registry.js";

const buildFooter = (function() {
    function createAndAddListElement(info, container) {
        const listElement = document.createElement('li');
        listElement.classList.add(classes.INFO_PAGE);
        listElement.id = info.name;
    
        container.appendChild(listElement);
        return listElement;
    }
    
    function createAndAddLinkElement(info, container) {
        const linkElement = document.createElement('a');
        linkElement.classList.add(classes.INFO_PAGE_LINK);
        linkElement.href = info.infoLink;
        linkElement.innerText = info.name;
    
        container.appendChild(linkElement);
    }
    
    function createAndAddOption(language, container) {
        const optionElement = document.createElement('option');
        optionElement.value = language;
        optionElement.innerText = language;
    
        container.appendChild(optionElement);
    }

    return {
        build: function(data) {
            const listsOfInfoContainer = document.getElementById('listsOfInfo');
            const languagesContainer = document.getElementById('selectLanguages');

            data.listsOfInfo.forEach(info => {
                const listElement = createAndAddListElement(info, listsOfInfoContainer);
                createAndAddLinkElement(info, listElement);
            })
            
            data.languages.forEach(language => {
                createAndAddOption(language, languagesContainer);
            })
        }
    }
})();

export {buildFooter};