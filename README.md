# Custom Radiobutton

Custom Radiobutton is a jQuery plugin for customizing the appearance of radiobuttons

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-custom-radiobutton/master/dist/jquery.custom-radiobutton.min.js
[max]: https://raw.github.com/binarystash/jquery-custom-radiobutton/master/dist/jquery.custom-radiobutton.js

## Installation

```html
<script src="jquery.js"></script>
<script src="dist/custom-radiobutton.min.js"></script>
<link rel="stylesheet" href="css/custom-radiobutton.css"/>
```

## Usage

1. Suppose you have the following.
	
	```html
	<input type="radio" id="first"/><label for="first">First</label>
    <label><input id="second" type="radio"/>Second</label>
    <input id="third" type="radio"/><label>Third</label>
    ```

2. Call the plugin

	```javascript
	jQuery(function($) {
	  $('input[type="radio"]'').customRadiobutton();
	});
	```

3. Customize the appearance by editing custom-radiobutton.css

##Support
Report bugs at https://github.com/binarystash/jquery-custom-radiobutton/issues.
