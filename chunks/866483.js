n.d(t, {
    HY: () => s,
    Pf: () => o,
    RZ: () => i,
    m$: () => a
}),
    n(388685),
    n(642613);
let r = new Set();
function i() {
    return r.size > 0;
}
function o() {
    let e = [...r].sort();
    return e.length > 0 ? e.join(',') : null;
}
function a(e) {
    l(() => r.add(e));
}
function s(e) {
    l(() => r.delete(e));
}
function l(e) {
    i(), e(), i();
}
