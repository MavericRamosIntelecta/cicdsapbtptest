sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectcicd.controller.Home", {
            onInit: function () {

            },

            fnEvaluarAdmin(sUserName){
                return true;
            }
        });
    });
