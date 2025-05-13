n.d(t, {
    HY: () => c,
    Pf: () => s,
    RZ: () => a,
    m$: () => l
}),
    n(388685),
    n(642613);
let r = ['coldStart'],
    i = !0,
    o = new Set();
function a() {
    return o.size > 0 || i;
}
function s() {
    let e = [...(i ? r : []), ...o].sort();
    return e.length > 0 ? e.join(',') : '';
}
function l(e) {
    u(() => o.add(e));
}
function c(e) {
    u(() => o.delete(e));
}
function u(e) {
    a(), (i = !1), e(), a();
}
