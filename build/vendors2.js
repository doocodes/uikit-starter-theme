var concat = require('concat');
var fse = require('fs-extra');
var path = require('path');

var source = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/verge/verge.min.js",
    "node_modules/jquery.mmenu/dist/jquery.mmenu.all.js",
    "node_modules/imagesloaded/imagesloaded.pkgd.min.js",
    "node_modules/masonry-layout/dist/masonry.pkgd.min.js",
    "node_modules/waypoints/lib/jquery.waypoints.min.js",
    "node_modules/inline-svg/dist/inlineSVG.min.js",
    "node_modules/packery/dist/packery.pkgd.min.js",
    "node_modules/nouislider/distribute/nouislider.min.js",
    "src/js/uikit-select.js",
    "node_modules/uikit/dist/js/uikit.min.js",
    "node_modules/uikit/dist/js/uikit-icons.min.js",
]

var outputFile = "dist/js/vendors.js";

var filename = "";
source.forEach(item => {
    fse.copy(item, "dist/js/" + path.basename(item))
        .then(() => console.log("File copied: " + path.basename(item)))
        .catch(err => console.error(err));
});


concat(source, outputFile)
    .then(result => console.log("JS scripts concatenated"))
    .catch(err => console.error(err));