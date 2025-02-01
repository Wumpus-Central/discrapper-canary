var t = Object.prototype;
function n(e) {
    var n = e && e.constructor;
    return e === (('function' == typeof n && n.prototype) || t);
}
e.exports = n;
