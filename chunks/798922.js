n.d(e, { F: () => T });
var i = n(657707),
    l = n(704215),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(36192),
    o = n(726985),
    c = n(388032);
let d = (0, s.x1)(r.n.SESSIONS_PANE, {
        useTitle: () => c.intl.string(c.t["+1h0k/"]),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    S = (0, s.wf)(r.n.SESSIONS_PANEL, {
        useTitle: () => c.intl.string(c.t["+1h0k/"]),
        buildLayout: () => [d],
    }),
    T = (0, s.m7)(r.n.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["+1h0k/"]),
        getLegacySearchKey: () => o.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        icon: i.dW3,
        trailing: {
            type: u.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => [S],
    });
