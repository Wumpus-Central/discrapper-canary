n.d(t, { F4: () => h, gM: () => g, p4: () => u, tU: () => m, tb: () => A });
var i = n(873298),
    l = n(594061),
    s = n(617617),
    r = n(805942),
    a = n(874421),
    o = n(886540),
    d = n(404373),
    c = n(718299);
let u = 864e5,
    h = [c.A, r.A, s.A];
function m(e) {
    let t = (0, o.Ji)(r.A.getMessages(e)),
        n = [c.A.getActivityAt(e), null != t ? (0, a.S)(t) : null, r.A.getFinishedAt(e)].filter((e) => null != e);
    return n.length > 0 ? Math.max(...n) : null;
}
function g(e, t) {
    var n;
    let i,
        l,
        r =
            ((n = s.A.settings),
            (l = null != (i = n.conjure?.projects[e]?.sidebarDismissedAt) ? Number(i) : 0) > 0 ? l : null);
    return null != r && (null == t || t <= r);
}
function A(e) {
    let t = Date.now();
    ((0, d.rW)(e),
        l.wc.updateAsync(
            "conjure",
            (n) => {
                for (let [i, l] of Object.entries(n.projects)) {
                    let s = Number(l.sidebarDismissedAt);
                    i === e || s <= 0 || t - s < u || (l.muted ? (l.sidebarDismissedAt = "0") : delete n.projects[i]);
                }
                n.projects[e] = i.Zy.create({ ...n.projects[e], sidebarDismissedAt: String(t) });
            },
            l.Sb.INFREQUENT_USER_ACTION,
        ));
}
