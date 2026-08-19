(e.exports = function (e, t) {
    if (null == e) return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n)) continue;
            r[n] = e[n];
        }
    return r;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
