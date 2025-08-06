n.d(t, {
    Y: () => o,
    n: () => i
});
var r = n(452896);
let i = globalThis;
function o(e, t, n) {
    let o = n || i,
        a = (o.__SENTRY__ = o.__SENTRY__ || {}),
        s = (a[r.J] = a[r.J] || {});
    return s[e] || (s[e] = t());
}
