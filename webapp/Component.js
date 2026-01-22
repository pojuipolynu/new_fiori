sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Log",
    "sap/bpt/helloworldui5/model/models"
], function (UIComponent, Log, models) {
    "use strict";

    return UIComponent.extend("sap.bpt.helloworldui5.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            Log.info("Hello-World Information Log");
            Log.debug("Hello-World Debug Log");
            Log.warning("Hello-World Warning Log");
            Log.error("Hello-World Error Log");
            Log.fatal("Hello-World Fatal Log");

            this.setModel(models.createDeviceModel(), "device");
            this.getRouter().initialize();
        }
    });
});
