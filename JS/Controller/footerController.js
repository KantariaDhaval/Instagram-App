import { footerModel } from "../Model/footerModel.js";
import { footerView } from "../View/footerView.js";

let footerController = {
    init: function() {
        footerView.init();
    },
    getFooterData: function() {
        return footerModel.footerData;
    }
}

export {footerController};