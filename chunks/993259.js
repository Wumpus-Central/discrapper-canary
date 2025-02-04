n.d(t, {
    E$: () => o,
    KV: () => s
});
var i = n(149765),
    r = n(605436),
    l = n(700785);
let a = (e, t, n) => {
    if (null == e.id) return !1;
    let r = l.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return i.e$(r, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(r.W)
        .map((e) => (0, r.X0)(e));
}
function o(e, t, n, i) {
    return Object.values(t).filter((e) => (0, r.GJ)(e) || a(e, i, n));
}
