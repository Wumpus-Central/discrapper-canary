n.d(t, {
    E$: () => o,
    KV: () => s
}),
    n(230036);
var r = n(149765),
    a = n(605436),
    i = n(700785);
let l = (e, t, n) => {
    if (null == e.id) return !1;
    let a = i.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return r.e$(a, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(a.W)
        .map((e) => (0, a.X0)(e));
}
function o(e, t, n, r) {
    return Object.values(t).filter((e) => (0, a.GJ)(e) || l(e, r, n));
}
