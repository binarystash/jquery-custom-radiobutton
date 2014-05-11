/*! custom-radiobutton - v1.0.0 - 2014-05-11
* https://github.com/binarystash/custom-radiobutton
* Copyright (c) 2014 BinaryStash; Licensed MIT */
(function ($) {

  function handleClick(actual,dummy) {
      
    var name = actual.attr("name");

    $("input[name='"+name+"']").next('.custom-radiobutton-display').removeClass('checked');

    dummy.addClass("checked");

    actual.prop("checked",true);

  }

  $.fn.customRadiobutton = function() {

    return this.each( function(i,v) {

      $(v).addClass("custom-radiobutton");

      //Ensure that a radio-button element was passed
      if ( !$(v).is(':radio') ) {
        return false;         
      }

      //Add classes
      $(v).addClass("custom-radiobutton");

      //Create dummy radio-button
      $(v).after("<span class='custom-radiobutton-display'></span>");
      var dummy = $(v).next('.custom-radiobutton-display');

      //Check for label
      var id = $(v).attr("id");
      var parentLabel = $(v).parent("label");
      var withinLabel = parentLabel.length;
      var label = withinLabel ? parentLabel : $("label[for='"+id+"']");

      //Add events
      label.click( function(e) {
        e.preventDefault();
        handleClick($(v),dummy);
      });

      if ( !withinLabel ) {
        dummy.click( function(e) {
          e.stopPropagation();
          handleClick($(v),dummy);
        });
      }

    });

  };

}(jQuery));
