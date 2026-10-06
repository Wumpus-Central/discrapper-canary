n.d(t, { EX: () => s, NO: () => c, SV: () => d, ny: () => o });
let r = null,
    l = null,
    u = new Set();
function i() {
    for (let e of u) e();
}
function a() {
    null != l && (clearTimeout(l), (l = null));
}
function s(e) {
    (a(), (r = { ...e }), (l = setTimeout(() => o(), 8e3)), i());
}
function o(e) {
    null != r && (null == e || r.iframeId === e) && (a(), (r = null), i());
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
