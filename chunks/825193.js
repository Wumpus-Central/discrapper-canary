n.d(e, { w: () => T });
var i = n(657707),
    l = n(509613),
    u = n(28682),
    r = n(313789),
    s = n(620163),
    a = n(64914),
    o = n(726985),
    c = n(388032);
let E = (0, l.x1)(r.n.ADVANCED_PANE, {
        buildLayout: () => [],
        render: a.ZP,
    }),
    S = (0, l.wf)(r.n.ADVANCED_PANEL, {
        useTitle: () => c.intl.string(c.t["8/udY0"]),
        buildLayout: () => [E],
    }),
    T = (0, l.m7)(r.n.ADVANCED_SIDEBAR_ITEM, {
        icon: i.xhG,
        useTitle: () => c.intl.string(c.t["8/udY0"]),
        getLegacySearchKey: () => o.s6.SETTINGS_ADVANCED,
        buildLayout: () => [S],
        trailing: {
            type: u.PU.BADGE_NEW,
            getDismissibleContentTypes: s.kQ,
            badgeComponent: s.h5,
        },
    });
