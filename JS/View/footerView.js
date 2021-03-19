import {footerController} from './../Controller/footerController.js';
import {buildFooter} from './../buildFooter.js';

let footerView = {
    init: function() {
        var data = footerController.getFooterData();
        buildFooter.build(data);
    }
}

export {footerView};