"use strict";
exports.__esModule = true;
exports.isImageFile = void 0;
function isImageFile(path) {
    return /\.(gif)|(jpg)|(jpeg)|(png)$/.test(path);
}
exports.isImageFile = isImageFile;
