# Foundation-Interchange-with-Unveil-Lazy-Load
Foundation Interchange 6 Lazy Load through jQuery Unveil

## Based on jQuery Unveil

[jQuery Unveil](http://luis-almeida.github.io/unveil/)

## Usage

Replace the Foundation Interchange data-attribute from "data-interchange" to "data-lazy". It works for both images and background images.

```html
<img data-lazy="[assets/img/interchange/small.jpg, small], [assets/img/interchange/medium.jpg, medium], [assets/img/interchange/large.jpg, large]">
<div data-lazy="[assets/partials/interchange-default.html, small], [assets/partials/interchange-medium.html, medium], [assets/partials/interchange-large.html, large]"></div>
```

## Call plugin

The example below will initialize the plugin on all elements with the "data-lazy" attribute and load the image on an offset of 700px.

```html
$('[data-lazy]').unveilInterchange(700);
```

For all the options please look up the options of [jQuery Unveil](http://luis-almeida.github.io/unveil/).

## Usage without Foundation Interchange for normal lazy load use

Instead of "data-lazy" just use "data-src" for lazy loading images without Foundation Interchange.

```html
<img data-src="normal.jpg">
```

## Dependencies

This is a plugin to expand the Foundation Interchange functions. Therefore Foundation and jQuery are required. 
Only tested with Foundation 6.
