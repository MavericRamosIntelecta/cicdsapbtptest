/*global QUnit*/

sap.ui.define([
	"projectcicd/controller/Home.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Home Controller");
    var oAppController = new Controller();

	QUnit.test("I should test the Home controller", function (assert) {
		oAppController.onInit();
		assert.ok(oAppController);
	});

    QUnit.test("Probando la funcionalidad de Admin", assert => {
        
        assert.ok(oAppController.fnEvaluarAdmin("MRAMOS"));
    })

});
