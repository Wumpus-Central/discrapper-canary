n.d(t, {
    A: () => i,
});
var r = n(998218);

function i(e, t) {
    let n = e.getIconSource(t);
    if (null != n && "number" != typeof n) {
        let e;
        if ((Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : (e = n.uri), null != e)) {
            var i;
            return null != (i = r.A.toURLSafe(e)) ? i : void 0;
        }
    }
}
