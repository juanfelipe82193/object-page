sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/BusyIndicator"
], function (Controller,
	mobileLibrary,
	MessageToast,
	JSONModel,
	BusyIndicator) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return Controller.extend("my.page.object.controller.StartPage", {

		onInit: function () {
			this._showBusyIndicator(5000, 0);
		},

		_getVal: function (evt) {
			return evt.getSource().getValue();
		},

		onPressCall: function () {
			URLHelper.triggerTel("+57 (316) 830 7283");
		},

		onPressMail: function () {
			URLHelper.triggerEmail("juan19_93@hotmail.com", "Contact Request", false, false, false, true);
		},

		onPressGithub: function () {
			URLHelper.redirect("https://github.com/juanfelipe82193", true);
		},

		onHomeIconPressed: function () {
			var sMsg = "SAPUI5 rocks!";
			MessageToast.show(sMsg);
		},

		onNotificationsPressed: function () {
			var sMsg = "You have 2 unread notifications... Nah! just kidding";
			MessageToast.show(sMsg);
		},

		onAvatarPressed: function () {
			var sMsg = "These are the initials for Juan Zorrilla";
			MessageToast.show(sMsg);
		},

		onSearchPressed: function () {
			var sMsg = "There's nothing to search right now!";
			MessageToast.show(sMsg);
		},

		onSharePressed: function () {
			URLHelper.redirect("https://www.linkedin.com/in/juan-felipe-zorrilla-ocampo-708330135/", true);
		},

		_hideBusyIndicator: function () {
			BusyIndicator.hide();
		},
		_showBusyIndicator: function (iDuration, iDelay) {
			BusyIndicator.show(iDelay);
			if (iDuration && iDuration > 0) {
				if (this._sTimeoutId) {
					clearTimeout(this._sTimeoutId);
					this._sTimeoutId = null;
				}
				this._sTimeoutId = setTimeout(function () {
					this._hideBusyIndicator();
				}.bind(this), iDuration);
			}
		}

	});
});
