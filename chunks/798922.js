n.d(e, { F: () => T });
var i = n(951288),
    l = n(657707),
    r = n(704215),
    u = n(509613),
    s = n(28682),
    a = n(313789),
    o = n(36192),
    c = n(726985),
    E = n(388032);
let d = (0, u.x1)(a.n.SESSIONS_PANE, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [],
        render: () => (0, i.jsx)(o.Z, {}),
    }),
    S = (0, u.wf)(a.n.SESSIONS_PANEL, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [d],
    }),
    T = (0, u.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        icon: l.dW3,
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        getLegacySearchKey: () => c.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        buildLayout: () => [S],
        trailing: {
            type: s.PU.BADGE_NEW,
            getDismissibleContentTypes: () => [r.z.AUTH_SESSIONS_NEW],
        },
    });
