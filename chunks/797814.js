var a = t(35910),
    l = t(797407).default;
(e.exports = function (e, r) {
    if ("object" != l(e) || !e) return e;
    var t = e[a];
    if (void 0 !== t) {
        var o = t.call(e, r || "default");
        if ("object" != l(o)) return o;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(e);
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
