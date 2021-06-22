sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat"
], function (Controller, DateFormat) {
    "use strict";

    return Controller.extend("my.page.object.controller.TimeLine", {

        onInit: function () {
            this.oTimeline = this.byId("timeline");
        },

        formatDateTime: function (dateTime) {
            var oDateInstance = DateFormat.getDateInstance();
            return oDateInstance.format(oDateInstance.parse(dateTime));
        }

    });
});