sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.parle.welcome.Card", {
		onInit: function () {
			var oComponent = this.getOwnerComponent(),
				oParameters = oComponent.card.getCombinedParameters(),
				sFirstName = oParameters.firstName,

				oModel = new JSONModel({
					welcomeText: "Welcome " + sFirstName + "!",
					greetingMessage: "\"Positive energy leads to positive outcomes. Let's create something amazing today!\""
				});

			this.getView().setModel(oModel, "greetings");
		}
	});
});