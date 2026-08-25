n.d(t, { EX: () => u, NO: () => c, SV: () => d, ny: () => o });
let r = null,
    s = null,
    i = new Set();
function a() {
    for (let e of i) e();
}
function l() {
    null != s && (clearTimeout(s), (s = null));
}
function u(e) {
    l(), (r = { ...e }), (s = setTimeout(() => o(), 8e3)), a();
}
function o(e) {
    null != r && (null == e || r.iframeId === e) && (l(), (r = null), a());
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
