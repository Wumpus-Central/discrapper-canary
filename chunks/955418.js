n.d(t, { EX: () => u, NO: () => c, SV: () => d, ny: () => o });
let r = null,
    l = null,
    i = new Set();
function s() {
    for (let e of i) e();
}
function a() {
    null != l && (clearTimeout(l), (l = null));
}
function u(e) {
    a(), (r = { ...e }), (l = setTimeout(() => o(), 8e3)), s();
}
function o(e) {
    null != r && (null == e || r.iframeId === e) && (a(), (r = null), s());
}
function c() {
    return r;
}
function d(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
