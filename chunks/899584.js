"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(947094),
    a = n(919577),
    o = n(207777),
    c = n(422844),
    d = n(435470),
    u = n(892110),
    h = n(45494),
    A = n(58736),
    p = n(985018);
function g(e) {
    let { channel: t } = e,
        n = (0, d.S4)(t),
        g = (0, s.bG)([r.A], () => r.A.hasHidden(t.id)),
        m = (0, u.l)(t.id),
        { sortOrder: _, tagFilter: f, tagSetting: x } = (0, c.R)(t.id),
        C = (0, s.bG)(
            [o.A, h.A],
            () => !!(o.A.getThreadIds(t.id, _, f, x).length > 0) || !!(h.A.getThreads(t.id, _, f, x).length > 0),
            [t.id, _, f, x],
        ),
        E = t.isMediaChannel();
    if (!n || m || (E && C)) return null;
    let I = g
        ? E
            ? p.intl.string(p.t["WP/IE1"])
            : p.intl.string(p.t.zfq9V4)
        : E
          ? p.intl.string(p.t.p60yF1)
          : p.intl.string(p.t.SNOqYC);
    return (0, i.jsx)(A.In, {
        tooltip: I,
        icon: l.mir,
        onClick: () => a.A.hideAdminOnboarding(t.id, !g),
        selected: !g,
    });
}
