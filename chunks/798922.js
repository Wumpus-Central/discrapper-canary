n.d(e, { F: () => d });
var i = n(54381),
    l = n(657707),
    u = n(704215),
    r = n(509613),
    s = n(28682),
    a = n(313789),
    o = n(36192),
    c = n(726985),
    E = n(388032);
let S = (0, r.x1)(a.n.SESSIONS_PANE, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [],
        render: () => (0, i.jsx)(o.Z, {}),
    }),
    T = (0, r.wf)(a.n.SESSIONS_PANEL, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [S],
    }),
    d = (0, r.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        icon: l.dW3,
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        getLegacySearchKey: () => c.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        buildLayout: () => [T],
        trailing: {
            type: s.PU.BADGE_NEW,
            getDismissibleContentTypes: () => [u.z.AUTH_SESSIONS_NEW],
        },
    });
