var n = r(306095);
function o(e, t) {
    for (var r = 0; r < t.length; r++) {
        var o = t[r];
        (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, n(o.key), o);
    }
}
(e.exports = function (e, t, r) {
    return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
