/*
 * Custom Radiobutton
 * 
 *
 * Copyright (c) 2015 BinaryStash
 * Licensed under the MIT license.
 */

(function ($) {

	$.fn.customRadiobutton = function() {

		return this.each( function(i,v) {

			$(v).addClass("custom-radiobutton");

			//Ensure that a radio-button element was passed
			if ( !$(v).is(':radio') ) {
				return false;         
			}

			//Add classes
			$(v).addClass("custom-radiobutton");

			//If not wrapped within label tags, wrap it
			var parentLabel = $(v).parent("label");
			var withinLabel = parentLabel.length;

			if ( !withinLabel ){
				$(v).wrap("<label>");      
			} 

			//Create dummy radio-button
			var dummy = $("<span class='custom-radiobutton-display'></span>");
			$(v).after(dummy);
			if ( $(v).prop("checked") ) {
				dummy.addClass("checked");    
			}

			//Add/remove classes to radio-buttons whenever state changes
			$(v).change( function(e) {

				var radiobutton = $(e.currentTarget);
				var name = radiobutton.attr("name");

				$("input[name='"+name+"']").next('.custom-radiobutton-display').removeClass('checked');
				radiobutton.next('.custom-radiobutton-display').addClass("checked");

			});

		});

	};

}(jQuery));