n.d(t, { EX: () => s, NO: () => c, SV: () => d, ny: () => o });
let r = null,
    l = null,
    i = new Set();
function u() {
    for (let e of i) e();
}
function a() {
    null != l && (clearTimeout(l), (l = null));
}
function s(e) {
    a(), (r = { ...e }), (l = setTimeout(() => o(), 8e3)), u();
}
function o(e) {
    null != r && (null == e || r.iframeId === e) && (a(), (r = null), u());
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
