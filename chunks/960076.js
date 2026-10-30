n.d(t, { A: () => s });
var i = n(350835),
    r = n(818023);
function a(e) {
    return e.type === i.$.STREAMING && null != e.url && r.yz.test(e.url);
}
function s(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
