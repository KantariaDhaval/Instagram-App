import { footerModel } from "./footerModel.js";
import { footerView } from "./footerView.js";

const footerController = {
    init: function() {
        footerView.init();
    },
    getFooterData: function() {
        return footerModel.footerData;
    }
}

export {footerController};