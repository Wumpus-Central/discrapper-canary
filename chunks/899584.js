n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(947094),
    r = n(919577),
    o = n(207777),
    d = n(422844),
    c = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    g = n(985018);
function m(e) {
    let { channel: t } = e,
        n = (0, c.S4)(t),
        m = (0, l.bG)([a.A], () => a.A.hasHidden(t.id)),
        p = (0, u.l)(t.id),
        { sortOrder: _, tagFilter: x, tagSetting: f } = (0, d.R)(t.id),
        E = (0, l.bG)(
            [o.A, h.A],
            () => !!(o.A.getThreadIds(t.id, _, x, f).length > 0) || !!(h.A.getThreads(t.id, _, x, f).length > 0),
            [t.id, _, x, f],
        ),
        C = t.isMediaChannel();
    if (!n || p || (C && E)) return null;
    let I = m
        ? C
            ? g.intl.string(g.t["WP/IE1"])
            : g.intl.string(g.t.zfq9V4)
        : C
          ? g.intl.string(g.t.p60yF1)
          : g.intl.string(g.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: I,
        icon: s.mir,
        onClick: () => r.A.hideAdminOnboarding(t.id, !m),
        selected: !m,
    });
}
