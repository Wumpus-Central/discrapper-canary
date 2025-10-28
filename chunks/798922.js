n.d(e, { F: () => I });
var i = n(951288),
    l = n(657707),
    u = n(704215),
    r = n(509613),
    s = n(28682),
    o = n(313789),
    a = n(36192),
    c = n(726985),
    E = n(388032);
let d = (0, r.x1)(o.n.SESSIONS_PANE, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
    }),
    T = (0, r.wf)(o.n.SESSIONS_PANEL, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        buildLayout: () => [d],
    }),
    I = (0, r.m7)(o.n.SESSIONS_SIDEBAR_ITEM, {
        icon: l.dW3,
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        legacySearchKey: c.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        buildLayout: () => [T],
        trailing: {
            type: s.PU.BADGE_NEW,
            getDismissibleContentTypes: () => [u.z.AUTH_SESSIONS_NEW],
        },
    });
