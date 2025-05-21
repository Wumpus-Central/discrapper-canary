n.d(t, {
    E$: () => o,
    KV: () => s
}),
    n(642613);
var r = n(149765),
    l = n(605436),
    i = n(700785);
let a = (e, t, n) => {
    if (null == e.id) return !1;
    let l = i.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return r.e$(l, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(l.W)
        .map((e) => (0, l.X0)(e));
}
function o(e, t, n, r) {
    return Object.values(t).filter((e) => (0, l.GJ)(e) || a(e, r, n));
}
