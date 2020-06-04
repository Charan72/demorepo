/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"map/mapnew/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});