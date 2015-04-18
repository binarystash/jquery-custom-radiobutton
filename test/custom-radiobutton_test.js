(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#custom-radiobutton', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').find("input[type='radio']");
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.customRadiobutton(), this.elems, 'should be chainable');
  });

  test('creates dummies', function() {
    expect(1);
    
    this.elems.customRadiobutton();
    strictEqual($('.custom-radiobutton-display').length, 3, 'should create dummies');
  });

  test('add/remove "custom-radiobutton-checked"', function() {
    expect(2);
    
    this.elems.customRadiobutton();

    $('.custom-radiobutton').eq(0).trigger('click');
    strictEqual($("#qunit-fixture .custom-radiobutton-display").eq(0).hasClass("custom-radiobutton-checked"), true, 'should add "custom-radiobutton-checked" to dummy 1');

    $('#qunit-fixture label').eq(1).trigger('click');
    strictEqual($("#qunit-fixture .custom-radiobutton-display").eq(0).hasClass("custom-radiobutton-checked"), true, 'should remove "custom-radiobutton-checked" from dummy 1');
  });

  test('recognize "check" attribute', function() {
    expect(3);
    
    this.elems.customRadiobutton();

    strictEqual($("#qunit-fixture .custom-radiobutton-display").eq(0).hasClass("custom-radiobutton-checked"), false, 'must not be checked');
	strictEqual($("#qunit-fixture .custom-radiobutton-display").eq(1).hasClass("custom-radiobutton-checked"), false, 'must not be checked');
	strictEqual($("#qunit-fixture .custom-radiobutton-display").eq(2).hasClass("custom-radiobutton-checked"), true, 'must be checked');
  });

}(jQuery));
