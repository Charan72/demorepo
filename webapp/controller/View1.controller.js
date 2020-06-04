var geocoder, llong, mapOptions, map, lat, lng;

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/ui/core/routing/History"
], function (Controller, MessageBox, History) {
	"use strict";

	return Controller.extend("map.mapnew.controller.View1", {

		onInit: function () {

			jQuery.sap.includeScript(
				"https://maps.googleapis.com/maps/api/js?key=AIzaSyAZy__OiL7vGXxuNHeV62KtqNs3h9RS2p0",
				"includeGoogleMaps",
				function () {

				}
			);

		},

		get: function () {

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
				
			} else 
			
			{
				alert ("Geolocation is not supported by this browser.");
			}


			function showPosition(position) {
					
			 lat = position.coords.latitude;

			 lng = position.coords.longitude;

//				alert("lat:" + lat + " lng:" + lng);
				
				llong = new google.maps.LatLng(lat, lng);
//				alert(llong);
				 map.setCenter(new google.maps.LatLng(lat, lng));	
					
				}

		var oCont = this;

			geocoder = new google.maps.Geocoder();
			geocoder.geocode({

			}, function (results, status) {


//				alert(llong);
				oCont.mapset();
//				alert(mapset);
			});

		},

		mapset: function () {
//  alert("mapset");
			this.getView().byId("map_canvas").addStyleClass("myMap");
			geocoder = new google.maps.Geocoder();
			mapOptions = {
				center: llong,
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),
				mapOptions);
			var marker3 = new google.maps.Marker({
				position: llong
			});
//			alert(llong);
			marker3.setMap(map);
		}

	});
});