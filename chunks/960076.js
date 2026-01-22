n.d(t, {
    A: () => s,
}),
    n(747238);
var r = n(360469),
    i = n(652215);

function a(e) {
    return e.type === i.$pd.STREAMING && null != e.url && r.yz.test(e.url);
}

function s(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
