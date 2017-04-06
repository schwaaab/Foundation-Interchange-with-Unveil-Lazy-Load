/**
 * jQuery unveilInterchange
 * A very lightweight jQuery plugin to lazy load images from Foundation Interchange based on jQuery Unveil from Simon Schwab
 * based on the jQuery Unveil plugin by Luis Almeida
 * https://github.com/schwaaab/Foundation-Interchange-with-Unveil-Lazy-Load
 *
 * Licensed under the MIT license.
 * Copyright 2017 Simon Schwab
 * https://github.com/schwaaab
 */

;(function($) {

  $.fn.unveilInterchange = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        attribIc = retina? "data-lazy-retina" : "data-lazy",
        images = this,
        loaded;

    this.one("unveilInterchange", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }

      var sourceIc = this.getAttribute(attribIc);
      sourceIc = sourceIc || this.getAttribute("data-lazy");
      if (sourceIc) {
        this.setAttribute("data-interchange", sourceIc);
        if (typeof callback === "function") callback.call(this);
        this.removeAttribute("data-lazy");
        $(this).foundation();
      }
    });

    function unveilInterchange() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveilInterchange");
      images = images.not(loaded);
    }

    $w.scroll(unveilInterchange);
    $w.resize(unveilInterchange);

    unveilInterchange();

    return this;

  };

})(window.jQuery || window.Zepto);
