n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(947094),
    r = n(919577),
    o = n(207777),
    c = n(200463),
    d = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    _ = n(985018);
function m(e) {
    let { channel: t } = e,
        n = (0, d.S4)(t),
        m = (0, l.bG)([a.A], () => a.A.hasHidden(t.id)),
        g = (0, u.l)(t.id),
        { sortOrder: p, tagFilter: f, tagSetting: x } = (0, c.R)(t.id),
        E = (0, l.bG)(
            [o.A, h.A],
            () => !!(o.A.getThreadIds(t.id, p, f, x).length > 0) || !!(h.A.getThreads(t.id, p, f, x).length > 0),
            [t.id, p, f, x],
        ),
        I = t.isMediaChannel();
    if (!n || g || (I && E)) return null;
    let C = m
        ? I
            ? _.intl.string(_.t["WP/IE1"])
            : _.intl.string(_.t.zfq9V4)
        : I
          ? _.intl.string(_.t.p60yF1)
          : _.intl.string(_.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: C,
        icon: s.mir,
        onClick: () => r.A.hideAdminOnboarding(t.id, !m),
        selected: !m,
    });
}
