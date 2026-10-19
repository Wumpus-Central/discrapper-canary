n.d(t, { EX: () => s, NO: () => c, SV: () => f, ny: () => a });
let r = null,
    u = null,
    l = new Set();
function o() {
    for (let e of l) e();
}
function i() {
    null != u && (clearTimeout(u), (u = null));
}
function s(e) {
    (i(), (r = { ...e }), (u = setTimeout(() => a(), 8e3)), o());
}
function a(e) {
    null != r && (null == e || r.iframeId === e) && (i(), (r = null), o());
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
