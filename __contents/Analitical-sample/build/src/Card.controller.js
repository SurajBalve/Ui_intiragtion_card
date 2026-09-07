sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.Analitical_card.Card", {
		onInit: function () {
			// var oModel = this.getOwnerComponent().getModel();
			// oModel.read("/Orders", {
            //     success: function (oData) {
			// 		console.log("Mododel",oData);
            //         var iCompleted = 0;
            //         var iPending = 0;

            //         oData.results.forEach(function (oOrder) {

            //             if (oOrder.ShippedDate) {
            //                 iCompleted++;
            //             } else {
            //                 iPending++;
            //             }

            //         });

            //         var oChartData = {
            //             results: [
            //                 {
            //                     Status: "Completed",
            //                     Count: iCompleted
            //                 },
            //                 {
            //                     Status: "Pending",
            //                     Count: iPending
            //                 }
            //             ]
            //         };

            //         this.getView().setModel(
            //             new JSONModel(oChartData),
            //             "chart"
            //         );

            //     }.bind(this),

            //     error: function (oError) {
            //         console.error(oError);
            //     }
			
            // });
            // var cardId = "ns.Analitical_card";
            // cardId = cardId.replace(/\./g,'/');
			// var oImgModel = new JSONModel({
            //     Image_1 : sap.ui.require.toUrl(cardId + "/images") + "/Image_1.png"
            // });
			// this.getView().setModel(oImgModel, "images");
			var oStaticData = {
                WorkStatus: [
                    {
                        Status: "Completed",
                        Count: 45
                    },
                    {
                        Status: "In Progress",
                        Count: 30
                    },
                    {
                        Status: "Pending",
                        Count: 18
                    },
                    {
                        Status: "On Hold",
                        Count: 7
                    }
                ]
            };

            var oChartModel = new JSONModel(oStaticData);

            this.getView().setModel(oChartModel, "chart");

            this._configureChart();
        },

        _configureChart: function () {
            var oVizFrame = this.byId("idWorkStatusChart");

            oVizFrame.setVizProperties({
                title: {
                    visible: true,
                    text: "Work Status"
                },

                legend: {
                    visible: false
                },

                plotArea: {
                    dataLabel: {
                        visible: true,
                        showTotal: true
                    },

                    colorPalette: [
                        "#107E3E",
                        "#0A6ED1",
                        "#E9730C",
                        "#BB0000"
                    ]
                },

                valueAxis: {
                    title: {
                        visible: true,
                        text: "Number of Tasks"
                    }
                },

                categoryAxis: {
                    title: {
                        visible: false
                    }
                },

                interaction: {
                    selectability: {
                        mode: "EXCLUSIVE"
                    }
                }
            });
        
		}
	});
});