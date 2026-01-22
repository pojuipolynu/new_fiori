sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/bpt/helloworldui5/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("sap.bpt.helloworldui5.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            console.info("Hello-World Information Log");
            console.debug("Hello-World Debug Log");
            console.warn("Hello-World Warning Log");
            console.error("Hello-World Error Log");


            this.setModel(models.createDeviceModel(), "device");
            this.getRouter().initialize();
        }
    });
});
