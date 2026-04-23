n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(885574),
    a = n(947094),
    r = n(919577),
    o = n(207777),
    d = n(200463),
    c = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    _ = n(985018);
function m(e) {
    let { channel: t } = e,
        n = (0, c.S4)(t),
        m = (0, l.bG)([a.A], () => a.A.hasHidden(t.id)),
        g = (0, u.l)(t.id),
        { sortOrder: p, tagFilter: f, tagSetting: E } = (0, d.R)(t.id),
        x = (0, l.bG)(
            [o.A, h.A],
            () => !!(o.A.getThreadIds(t.id, p, f, E).length > 0) || !!(h.A.getThreads(t.id, p, f, E).length > 0),
            [t.id, p, f, E],
        ),
        I = t.isMediaChannel();
    if (!n || g || (I && x)) return null;
    let C = m
        ? I
            ? _.intl.string(_.t["WP/IE1"])
            : _.intl.string(_.t.zfq9V4)
        : I
          ? _.intl.string(_.t.p60yF1)
          : _.intl.string(_.t.SNOqYC);
    return (0, i.jsx)(A.In, { tooltip: C, icon: s.m, onClick: () => r.A.hideAdminOnboarding(t.id, !m), selected: !m });
}
