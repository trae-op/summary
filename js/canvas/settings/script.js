
ViewKonva.prototype.Settings = function(object) {
	var _this = this;	

	_this.Data 								 = object.data;

	_this.Layer 							 = object.layer;
	_this.Group 							 = object.group;

	_this.ColorOtherCircles 	 = object.colorOtherCircles;
	_this.NumberOtherCircles   = object.numberOtherCircles;
	_this.BorderLineOther			 = object.borderLineOther;
	_this.RadiusOtherCircle    = object.radiusOtherCircle;
	_this.BorderLineContent		 = object.borderLineContent;

	_this.BorderLineItemMenu	 = object.borderLineItemMenu;
	_this.ColorItemMenu 			 = object.colorItemMenu;
	_this.RadiusItemMenu 			 = object.radiusItemMenu;
	_this.ShadowActiveItemMenu = object.shadowActiveItemMenu;
	_this.SpeedAllCircles 		 = object.speedAllCircles;

	_this.FontSize 						 = object.fontSize;
	_this.FontFamily  				 = object.fontFamily;
	_this.ShadowColorText			 = object.shadowColorText;

	_this.SpeedLineItemMenu		 = object.speedLineItemMenu;

	_this.BorderPreviewMenu    = object.borderPreviewMenu;
	_this.ColorPreviewMenu		 = object.colorPreviewMenu;
	_this.WHpreviewItemMenu    = object.whPreviewItemMenu;

	_this.FlagHoverItemMenu    = object.flagHoverItemMenu;

	_this.RadiusCirclesContent = object.radiusCirclesContent;
	_this.HoverTextAnimate		 = object.hoverTextAnimate;

	_this.IdClose							 = object.idClose;
	_this.AddClass						 = object.addClass;

	

	_this.CircleItemsMenu()
		.OtherCircles()
		.OtherLines()

		.PreviewProjects()
		.PreviewContent()

		.LineItemsMenu()
		.LineTextItemMenu()
		.TextItemMenu()
		.ShowLineItemMenu()
		.ShowPreviewItemMenu()

		.TextContent()

		.ConnectingLine()

		.ButtonClose();

};