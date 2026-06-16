(e.exports = function (e, t) {
    if (null == e) return {};
    var n = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (-1 !== t.indexOf(i)) continue;
            n[i] = e[i];
        }
    return n;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
