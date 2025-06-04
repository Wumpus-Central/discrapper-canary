n.d(t, {
    HY: () => _,
    Pf: () => d,
    RZ: () => u,
    m$: () => f
}),
    n(388685),
    n(642613),
    n(570833),
    n(626135),
    n(981631);
let r = ['COLD_START'],
    i = 'NO_REASONS',
    o = !0,
    a = new Map();
function s(e) {
    var t;
    let n = null != (t = a.get(e)) ? t : 0;
    a.set(e, n + 1);
}
function l(e) {
    var t;
    let n = (null != (t = a.get(e)) ? t : 0) - 1;
    n <= 0 ? a.delete(e) : a.set(e, n);
}
function c(e) {
    return 'BRIDGE:'.concat(e);
}
function u() {
    return a.size > 0 || o;
}
function d() {
    let e = [...(o ? r : []), ...a.keys()].sort();
    return e.length > 0 ? e.join(',') : i;
}
function f(e) {
    p(() => {
        s(e), l(c(e));
    });
}
function _(e) {
    p(() => l(e));
}
function p(e) {
    u(), (o = !1), e(), u();
}
