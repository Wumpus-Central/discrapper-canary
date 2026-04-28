i.d(e, { A: () => u });
var t = i(998218);
function u(r, e) {
    let i = r.getIconSource(e);
    if (null != i && "number" != typeof i) {
        let r;
        if ((Array.isArray(i) ? i.length > 0 && (r = i[0].uri) : (r = i.uri), null != r))
            return t.A.toURLSafe(r) ?? void 0;
    }
}
