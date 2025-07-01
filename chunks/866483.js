(n.d(t, {
    HY: () => _,
    Pf: () => d,
    RZ: () => u,
    m$: () => f
}),
    n(388685),
    n(642613),
    n(570833),
    n(626135),
    n(981631));
let r = ['COLD_START'],
    i = 'NO_REASONS',
    a = !0,
    o = new Map();
function s(e) {
    var t;
    let n = null != (t = o.get(e)) ? t : 0;
    o.set(e, n + 1);
}
function l(e) {
    var t;
    let n = (null != (t = o.get(e)) ? t : 0) - 1;
    n <= 0 ? o.delete(e) : o.set(e, n);
}
function c(e) {
    return 'BRIDGE:'.concat(e);
}
function u() {
    return o.size > 0 || a;
}
function d() {
    let e = [...(a ? r : []), ...o.keys()].sort();
    return e.length > 0 ? e.join(',') : i;
}
function f(e) {
    p(() => {
        (s(e), l(c(e)));
    });
}
function _(e) {
    p(() => l(e));
}
function p(e) {
    (u(), (a = !1), e(), u());
}
