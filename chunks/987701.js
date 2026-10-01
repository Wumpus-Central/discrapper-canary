function i(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
r.d(t, { A: () => n });
let n = function e(t, r) {
    if (t === r) return !0;
    if (null == t || null == r) return !1;
    if (Array.isArray(t))
        return (
            Array.isArray(r) &&
            t.length === r.length &&
            t.every(function (t, i) {
                return e(t, r[i]);
            })
        );
    if ("object" == typeof t || "object" == typeof r) {
        var n = i(t),
            o = i(r);
        return n !== t || o !== r
            ? e(n, o)
            : Object.keys(Object.assign({}, t, r)).every(function (i) {
                  return e(t[i], r[i]);
              });
    }
    return !1;
};
