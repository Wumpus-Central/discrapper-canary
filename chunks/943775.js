n.d(e, { A: () => l });
var i = n(998218);
function l(t, e) {
    let n = t.getIconSource(e);
    if (null != n && "number" != typeof n) {
        let t;
        if ((Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : (t = n.uri), null != t))
            return i.A.toURLSafe(t) ?? void 0;
    }
}
