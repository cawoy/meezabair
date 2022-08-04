flat-slider
===========

Slider based on jQuery Slider in flat design with some eye candy specials

## How it looks like

![How it looks like](screencast.gif)

## How to use it..
See also example.html

### Single Slider

```html
<input type="hidden" id="slider_single" class="flat-slider" />
<script>
	jQuery(function() {
		jQuery( "#slider_single" ).flatslider({
			min: 10000, max: 500000,
			step: 1000,
			value: 150000,
			range: "min",
			einheit: '&euro;'
		});
	});
</script>
```

### Range Slider

```html
<input type="hidden" id="slider_range" class="flat-slider" />
<script>
	jQuery(function() {
		jQuery( "#slider_range" ).flatslider({
			min: 10000, max: 500000,
			step: 1000,
			values: [45000, 130000],
			range: true,
			einheit: '&euro;'
		});
	});
</script>
``
