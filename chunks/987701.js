function o(n) {
    return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n);
}
e.d(t, { A: () => i });
let i = function n(t, e) {
    if (t === e) return !0;
    if (null == t || null == e) return !1;
    if (Array.isArray(t))
        return (
            Array.isArray(e) &&
            t.length === e.length &&
            t.every(function (t, o) {
                return n(t, e[o]);
            })
        );
    if ("object" == typeof t || "object" == typeof e) {
        var i = o(t),
            r = o(e);
        return i !== t || r !== e
            ? n(i, r)
            : Object.keys(Object.assign({}, t, e)).every(function (o) {
                  return n(t[o], e[o]);
              });
    }
    return !1;
};
