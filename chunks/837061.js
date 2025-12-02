n.d(e, { x: () => d });
var i = n(657707),
    r = n(509613),
    l = n(313789),
    s = n(736752),
    u = n(726985),
    a = n(388032);
let o = (0, r.x1)(l.n.ACCOUNT_PANE, {
        useTitle: () => a.intl.string(a.t["JAIM/m"]),
        buildLayout: () => [],
        render: s.Z,
    }),
    c = (0, r.wf)(l.n.ACCOUNT_PANEL, {
        useTitle: () => a.intl.string(a.t["JAIM/m"]),
        buildLayout: () => [o],
    }),
    d = (0, r.m7)(l.n.ACCOUNT_SIDEBAR_ITEM, {
        icon: i.tBG,
        useTitle: () => a.intl.string(a.t["JAIM/m"]),
        getLegacySearchKey: () => u.s6.ACCOUNT,
        buildLayout: () => [c],
    });
