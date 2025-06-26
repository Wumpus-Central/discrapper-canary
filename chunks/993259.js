n.d(t, {
    E$: () => o,
    KV: () => s
}),
    n(642613);
var r = n(149765),
    i = n(605436),
    a = n(700785);
let l = (e, t, n) => {
    if (null == e.id) return !1;
    let i = a.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return r.e$(i, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(i.W)
        .map((e) => (0, i.X0)(e));
}
function o(e, t, n, r) {
    return Object.values(t).filter((e) => (0, i.GJ)(e) || l(e, r, n));
}
