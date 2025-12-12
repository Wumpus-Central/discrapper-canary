n.d(e, { F: () => A });
var i = n(657707),
    l = n(704215),
    s = n(43015),
    u = n(509613),
    r = n(970013),
    a = n(313789),
    o = n(526665),
    c = n(36192),
    S = n(830031),
    T = n(211839),
    d = n(572161),
    g = n(726985),
    E = n(388032);
let I = (0, u.k4)(a.n.SESSIONS_DESCRIPTION_CATEGORY, { buildLayout: () => [d.Z] }),
    _ = (0, u.k4)(a.n.SESSIONS_CATEGORY, {
        buildLayout: () => [S.P, T.m],
        initialize: () => (
            (0, s.fw)(),
            () => {
                (0, s.$Z)();
            }
        ),
    }),
    O = (0, u.wf)(a.n.SESSIONS_PANEL, {
        usePredicate: () => !(0, o.gN)("LegacySessionsPanel"),
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: c.ZP,
        buildLayout: () => [],
    }),
    N = (0, u.wf)(a.n.SESSIONS_PANEL, {
        usePredicate: () => (0, o.gN)("SessionsPanel"),
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [I, _],
    }),
    A = (0, u.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, o.Gl)("SessionsPanel") ? void 0 : g.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: i.dW3,
        trailing: {
            type: r.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => ((0, o.Gl)("SessionsPanel") ? [N] : [O]),
    });
