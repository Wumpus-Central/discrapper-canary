var t = Object.prototype;
e.exports = function (e) {
    var n = e && e.constructor;
    return e === (('function' == typeof n && n.prototype) || t);
};
