n.d(e, { F: () => I });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    r = n(509613),
    u = n(28682),
    a = n(313789),
    o = n(36192),
    c = n(726985),
    d = n(388032);
let E = (0, r.x1)(a.n.SESSIONS_PANE, {
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        render: () => (0, i.jsx)(o.Z, {}),
        buildLayout: () => [],
    }),
    S = (0, r.wf)(a.n.SESSIONS_PANEL, {
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        buildLayout: () => [E],
    }),
    I = (0, r.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["+1h0k/"]),
        getLegacySearchKey: () => c.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        icon: l.dW3,
        trailing: {
            type: u.PU.BADGE_NEW,
            getDismissibleContentTypes: () => [s.z.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => [S],
    });
