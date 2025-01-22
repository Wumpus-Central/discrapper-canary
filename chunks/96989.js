r.d(n, {
    e: function () {
        return o;
    }
});
var i = r(47120);
let a = '_errors';
function o(e) {
    return s(e, void 0);
}
function s(e, n) {
    let r = e[a];
    if (null != r && Array.isArray(r)) return r[0];
    for (let [r, i] of Object.entries(e)) {
        if (r !== a && null != i) {
            if ('object' == typeof i) return s(i, null != n ? n : r);
        }
    }
    return null;
}
