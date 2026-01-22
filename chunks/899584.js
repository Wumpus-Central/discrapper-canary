n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(947094),
    s = n(919577),
    o = n(207777),
    c = n(422844),
    u = n(435470),
    d = n(892110),
    f = n(45494),
    p = n(58736),
    h = n(985018);
function b(e) {
    let { channel: t } = e,
        n = (0, u.S4)(t),
        b = (0, l.bG)([a.A], () => a.A.hasHidden(t.id)),
        g = (0, d.l)(t.id),
        { sortOrder: m, tagFilter: A, tagSetting: y } = (0, c.R)(t.id),
        O = (0, l.bG)(
            [o.A, f.A],
            () => !!(o.A.getThreadIds(t.id, m, A, y).length > 0) || !!(f.A.getThreads(t.id, m, A, y).length > 0),
            [t.id, m, A, y],
        ),
        j = t.isMediaChannel();
    if (!n || g || (j && O)) return null;
    let v = b
        ? j
            ? h.intl.string(h.t["WP/IE1"])
            : h.intl.string(h.t.zfq9V4)
        : j
          ? h.intl.string(h.t.p60yF1)
          : h.intl.string(h.t.SNOqYC);
    return (0, r.jsx)(p.In, {
        tooltip: v,
        icon: i.mir,
        onClick: () => s.A.hideAdminOnboarding(t.id, !b),
        selected: !b,
    });
}
