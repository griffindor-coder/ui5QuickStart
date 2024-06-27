sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONmodel) {
    "use strict";

    return Controller.extend("sample.Quickstart.controller.homeController", {
        onInit: function () {
          console.log("test");
        }
    });
});