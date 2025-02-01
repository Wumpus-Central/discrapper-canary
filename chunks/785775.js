var t = Function.prototype.toString;
function n(e) {
    if (null != e) {
        try {
            return t.call(e);
        } catch (e) {}
        try {
            return e + '';
        } catch (e) {}
    }
    return '';
}
e.exports = n;
