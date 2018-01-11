var fse = require('fs-extra');
var path = require('path');
var glob = require('glob');

[

 /* UiKit */
 { "source": "node_modules/uikit/dist/css/uikit.css", "dest": "dist/css/uikit.css" },
 { "source": "node_modules/uikit/dist/css/uikit.min.css", "dest": "dist/css/uikit.min.css" }, 
 { "source": "node_modules/uikit/dist/js/uikit-icons.js", "dest": "dist/js/uikit-icons.js" },
 { "source": "node_modules/uikit/dist/js/uikit-icons.min.js", "dest": "dist/js/uikit-icons.min.js" },
 { "source": "node_modules/uikit/dist/js/uikit.js", "dest": "dist/js/uikit.js" },
 { "source": "node_modules/uikit/dist/js/uikit.min.js", "dest": "dist/js/uikit.min.js" },

 /* Fonts */
 { "source": "src/fonts", "dest": "dist/fonts" },

 /* Images */
 { "source": "src/img"  , "dest": "dist/img" },

].forEach(item => {
    fse.copy(item.source, item.dest)
        .then(() => console.log("File copied: " + path.basename(item.dest)))
        .catch(err => console.error(err));
});