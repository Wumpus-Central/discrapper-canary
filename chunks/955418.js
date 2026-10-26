n.d(t, { EX: () => a, NO: () => c, SV: () => f, ny: () => i });
let r = null,
    u = null,
    l = new Set();
function o() {
    for (let e of l) e();
}
function s() {
    null != u && (clearTimeout(u), (u = null));
}
function a(e) {
    (s(), (r = { ...e }), (u = setTimeout(() => i(), 8e3)), o());
}
function i(e) {
    null != r && (null == e || r.iframeId === e) && (s(), (r = null), o());
}
function c() {
    return r;
}
function f(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
