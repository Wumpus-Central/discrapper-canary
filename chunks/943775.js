i.d(n, { A: () => l });
var e = i(998218);
function l(t, n) {
    let i = t.getIconSource(n);
    if (null != i && "number" != typeof i) {
        let t;
        if ((Array.isArray(i) ? i.length > 0 && (t = i[0].uri) : (t = i.uri), null != t))
            return e.A.toURLSafe(t) ?? void 0;
    }
}
