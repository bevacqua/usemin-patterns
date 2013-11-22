'use strict';

module.exports = {
    jade: [[
        /script\([^\)]*src=['"]([^"']+)["']/gm,
        'Update the Jade to reference our concat/min/revved script files'
    ], [
        /link\([^\)]*href=['"]([^"']+)["']/gm,
        'Update the Jade with the new css filenames'
    ], [
        /img\([^\)]*src=['"]([^"']+)["']/gm,
        'Update the Jade with the new img filenames'
    ], [
        /data-main\s*=['"]([^"']+)['"]/gm,
        'Update the Jade with data-main tags',
        function (m) { return m.match(/\.js$/) ? m : m + '.js'; },
        function (m) { return m.replace('.js', ''); }
    ], [
        /data-(?!main).[^=]+=['"]([^'"]+)['"]/gm,
        'Update the Jade with data-* tags'
    ], [
        /url\(\s*['"]([^"']+)["']\s*\)/gm,
        'Update the Jade with background imgs, case there is some inline style'
    ], [
        /a\([^\)]*href=['"]([^"']+)["']/gm,
        'Update the Jade with anchors images'
    ], [
        /input\([^\)]*src=['"]([^"']+)["']/gm,
        'Update the Jade with reference in input'
    ]],
    js: [[
        /["']([^:"']+\.(?:png|gif|jpe?g))["']/img,
        'Update JavaScript with images in strings'
    ]]
};
