n.d(t, { EX: () => i, NO: () => a, SV: () => f, ny: () => c });
let r = null,
    u = null,
    l = new Set();
function o() {
    for (let e of l) e();
}
function s() {
    null != u && (clearTimeout(u), (u = null));
}
function i(e) {
    (s(), (r = { ...e }), (u = setTimeout(() => c(), 8e3)), o());
}
function c(e) {
    null != r && (null == e || r.iframeId === e) && (s(), (r = null), o());
}
function a() {
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
