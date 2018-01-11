/* eslint-env node */
var fs = require('fs');
var glob = require('glob');
var path = require('path');
var util = require('./util');
var postcss = require('postcss');
const argv = require('minimist')(process.argv);
var args = argv._;

argv._.forEach(arg => {
    const tokens = arg.split('=');
    argv[tokens[0]] = tokens[1] || true;
});

var develop = argv.develop || argv.debug || argv.d || argv.nominify;

[   
    {src: 'src/less/uikit.theme.less', dist: `dist/css/uikit.theme.css`}

].forEach(config => compile(config.src, config.dist));

var themes = fs.existsSync('themes.json') ? JSON.parse(fs.readFileSync('themes.json')) : {};

glob.sync('custom/*.less').forEach(file => {

    var theme = path.basename(file, '.less'),
        dist = `dist/css/uikit.${theme}.css`;

    themes[theme] = {css: `../${dist}`};

    if (fs.existsSync(`dist/js/uikit-icons-${theme}.js`)) {
        themes[theme].icons = `../dist/js/uikit-icons-${theme}.js`;
    }

    return compile(file, dist);

});

if ((Object.keys(themes).length || !fs.existsSync('themes.json'))) {
    util.write('themes.json', JSON.stringify(themes));
}

function compile(file, dist) {
    return util.read(file).then(data =>
        util.renderLess(data, {
            relativeUrls: true,
            rootpath: '../../',
            paths: ['src/less/', 'dist/css/']
        })
            .then(output => output.replace(/\.\.\/dist\//g, '').process(output).css)
            .then(output => util.write(dist, util.banner + output))
            .then(res => !develop && util.minify(res)),
        error => console.log(error)
    );
}
