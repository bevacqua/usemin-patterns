'use strict';

module.exports = {
    jade: [[
        /src=['"]([^"']+(?:png|gif|jpe?g|css|js))["']/img,
        'Update the Jade with src attributes'
    ], [
        /href=['"]([^"']+(?:png|gif|jpe?g|css|js))["']/img,
        'Update the Jade with href attributes'
    ], [
        /url\(\s*['"]([^"']+)["']\s*\)/img,
        'Update the Jade with background imgs, case there is some inline style'
    ]],
    js: [[
        /["']([^:"']+\.(?:png|gif|jpe?g))["']/img,
        'Update JavaScript with images in strings'
    ]]
};
