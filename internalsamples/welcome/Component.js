sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("com.parle.welcome.Component", {

		onCardReady: function (oCard) {
			// Holds the card for use inside the controller
			this.card = oCard;

			// Can get all parameters with method getCombinedParameters
			oCard.getCombinedParameters();
			const category = oCard.getCombinedParameters().category;

			const domRef = oCard.getDomRef();

				if (domRef) {
					category === 'internal' ? domRef.style.background = "#F5F6F7" : domRef.style.background = "#ffffffff";					 
					domRef.style.borderRadius = "12px";
				}

			// Get any section of the card manifest with method getManifestEntry
			oCard.getManifestEntry("/sap.card");

			// When in context of a Host, like in Work Zone you can use the following methods
			// oCard.getHostInstance();
			// oCard.resolveDestination("myDestination"); // check more in the destinations sample
		}
	});

	return Component;

});
