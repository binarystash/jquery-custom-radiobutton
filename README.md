[![Build Status](https://travis-ci.org/binarystash/jquery-custom-radiobutton.svg?branch=master)](https://travis-ci.org/binarystash/jquery-custom-radiobutton)

# Custom Radiobutton

Custom Radiobutton is a jQuery plugin for customizing the appearance of radiobuttons.

## Demo

Play with a [fiddle](http://jsfiddle.net/binarystash/YvYt3/).

## Installation

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-custom-radiobutton/master/dist/jquery.custom-radiobutton.min.js
[max]: https://raw.github.com/binarystash/jquery-custom-radiobutton/master/dist/jquery.custom-radiobutton.js

In your webpage:

```html
<script src="jquery.js"></script>
<script src="dist/custom-radiobutton.min.js"></script>
<link rel="stylesheet" href="css/custom-radiobutton.css"/>
```

## Usage

1. Suppose you have the following.
	
	```html
	<input name="number" type="radio" id="first"/><label for="first">First</label>
    <label><input name="number" id="second" type="radio"/>Second</label>
    <input name="number" id="third" type="radio"/><label>Third</label>
    ```

2. Call the plugin.

	```javascript
	jQuery('input[type="radio"]').customRadiobutton();
	```

3. Customize the appearance by editing custom-radiobutton.css

##Compatibility
Tested on IE8; latest versions of Firefox and Chrome

##Support
Report bugs at https://github.com/binarystash/jquery-custom-radiobutton/issues.
