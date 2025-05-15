n.d(t, {
    HY: () => c,
    Pf: () => s,
    RZ: () => o,
    m$: () => l
}),
    n(388685),
    n(642613);
let r = ['coldStart'],
    i = !0,
    a = new Set();
function o() {
    return a.size > 0 || i;
}
function s() {
    let e = [...(i ? r : []), ...a].sort();
    return e.length > 0 ? e.join(',') : '';
}
function l(e) {
    u(() => a.add(e));
}
function c(e) {
    u(() => a.delete(e));
}
function u(e) {
    o(), (i = !1), e(), o();
}
