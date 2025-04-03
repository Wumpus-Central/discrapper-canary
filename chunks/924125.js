t.exports = function (t) {
    if (void 0 === (t = t || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return t.activeElement || t.body;
    } catch (e) {
        return t.body;
    }
};
