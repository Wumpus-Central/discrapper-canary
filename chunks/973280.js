var n = r(306095);
function i(e, t) {
    for (var r = 0; r < t.length; r++) {
        var i = t[r];
        (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, n(i.key), i);
    }
}
(e.exports = function (e, t, r) {
    return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
