t.exports = function (t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
};
