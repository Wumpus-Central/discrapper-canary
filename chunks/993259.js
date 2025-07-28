(n.d(t, {
    E: () => d,
    K: () => c
}),
    n(388685),
    n(642613));
var r = n(149765),
    i = n(605436),
    a = n(345162),
    l = n(700785),
    s = n(981631);
let o = (e, t, n) => {
    if (null == e.id) return !1;
    let i = l.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return r.e$(i, t);
};
function c(e) {
    return [...e].sort(i.W).map((e) => (0, i.X0)(e));
}
function d(e, t, n) {
    return e.filter((e) => (0, a.Fs)(e, s.Plq.ADMINISTRATOR) || o(e, n, t));
}
