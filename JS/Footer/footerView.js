import {footerController} from './footerController.js';
import {buildFooter} from '../buildFooter.js';

const footerView = {
    init: function() {
        this.render();
    },

    render: function() {
        const data = footerController.getFooterData();
        buildFooter.build(data);
    }
}

export {footerView};