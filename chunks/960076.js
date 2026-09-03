n.d(t, { A: () => s });
var i = n(360469),
    r = n(652215);
function a(e) {
    return e.type === r.$pd.STREAMING && null != e.url && i.yz.test(e.url);
}
function s(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
