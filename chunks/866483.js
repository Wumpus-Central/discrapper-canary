n.d(t, {
    HY: () => u,
    Pf: () => l,
    RZ: () => s,
    m$: () => c
}),
    n(388685),
    n(642613);
let r = ['COLD_START'],
    i = 'NO_REASONS',
    o = !0,
    a = new Set();
function s() {
    return a.size > 0 || o;
}
function l() {
    let e = [...(o ? r : []), ...a].sort();
    return e.length > 0 ? e.join(',') : i;
}
function c(e) {
    d(() => a.add(e));
}
function u(e) {
    d(() => a.delete(e));
}
function d(e) {
    s(), (o = !1), e(), s();
}
