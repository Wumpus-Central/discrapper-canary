t.exports = function (t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
};
