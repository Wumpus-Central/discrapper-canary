n.d(t, { EX: () => i, NO: () => c, SV: () => d, ny: () => a });
let r = null,
    l = null,
    u = new Set();
function s() {
    for (let e of u) e();
}
function o() {
    null != l && (clearTimeout(l), (l = null));
}
function i(e) {
    (o(), (r = { ...e }), (l = setTimeout(() => a(), 8e3)), s());
}
function a(e) {
    null != r && (null == e || r.iframeId === e) && (o(), (r = null), s());
}
function c() {
    return r;
}
function d(e) {
    return (
        u.add(e),
        () => {
            u.delete(e);
        }
    );
}
