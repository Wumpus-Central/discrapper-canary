n.d(t, { r: () => a }), n(775443), n(321073);
var i = n(284009),
    r = n.n(i);
function a(e, t, n, i) {
    let a = (n - t) / 1e3 + 1,
        s = [];
    for (let n = 0; n < a; n++) {
        let a = t + 1e3 * n,
            l = e.findLast((e) => e.timestamp_ms <= a);
        r()(null != l, "bad timeline!"), s.push(i(l));
    }
    return s;
}
