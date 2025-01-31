n.d(t, {
    E$: () => o,
    KV: () => s
});
var i = n(149765),
    l = n(605436),
    r = n(700785);
let a = (e, t, n) => {
    if (null == e.id) return !1;
    let l = r.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return i.e$(l, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(l.W)
        .map((e) => (0, l.X0)(e));
}
function o(e, t, n, i) {
    return Object.values(t).filter((e) => (0, l.GJ)(e) || a(e, i, n));
}
