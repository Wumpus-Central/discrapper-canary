n.d(e, { F: () => T });
var i = n(54381),
    r = n(657707),
    l = n(704215),
    s = n(509613),
    u = n(28682),
    a = n(313789),
    o = n(36192),
    c = n(726985),
    d = n(388032);
let E = (0, s.x1)(a.n.SESSIONS_PANE, {
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        buildLayout: () => [],
        render: () => (0, i.jsx)(o.Z, {}),
    }),
    S = (0, s.wf)(a.n.SESSIONS_PANEL, {
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        buildLayout: () => [E],
    }),
    T = (0, s.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        icon: r.dW3,
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        getLegacySearchKey: () => c.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        buildLayout: () => [S],
        trailing: {
            type: u.PU.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.AUTH_SESSIONS_NEW],
        },
    });
