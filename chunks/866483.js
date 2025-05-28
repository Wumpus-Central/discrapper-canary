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
    a = !0,
    o = new Set();
function s() {
    return o.size > 0 || a;
}
function l() {
    let e = [...(a ? r : []), ...o].sort();
    return e.length > 0 ? e.join(',') : i;
}
function c(e) {
    d(() => o.add(e));
}
function u(e) {
    d(() => o.delete(e));
}
function d(e) {
    s(), (a = !1), e(), s();
}
