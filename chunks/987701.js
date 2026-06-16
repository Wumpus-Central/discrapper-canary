"use strict";
function i(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
n.d(t, { A: () => r });
let r = function e(t, n) {
    if (t === n) return !0;
    if (null == t || null == n) return !1;
    if (Array.isArray(t))
        return (
            Array.isArray(n) &&
            t.length === n.length &&
            t.every(function (t, i) {
                return e(t, n[i]);
            })
        );
    if ("object" == typeof t || "object" == typeof n) {
        var r = i(t),
            s = i(n);
        return r !== t || s !== n
            ? e(r, s)
            : Object.keys(Object.assign({}, t, n)).every(function (i) {
                  return e(t[i], n[i]);
              });
    }
    return !1;
};
