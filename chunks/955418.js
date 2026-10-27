n.d(t, { EX: () => i, NO: () => c, SV: () => d, ny: () => a });
let r = null,
    l = null,
    u = new Set();
function o() {
    for (let e of u) e();
}
function s() {
    null != l && (clearTimeout(l), (l = null));
}
function i(e) {
    (s(), (r = { ...e }), (l = setTimeout(() => a(), 8e3)), o());
}
function a(e) {
    null != r && (null == e || r.iframeId === e) && (s(), (r = null), o());
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
