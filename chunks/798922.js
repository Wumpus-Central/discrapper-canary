n.d(e, { F: () => O });
var i = n(657707),
    l = n(704215),
    s = n(43015),
    u = n(509613),
    r = n(970013),
    a = n(313789),
    o = n(526665),
    T = n(36192),
    S = n(830031),
    c = n(211839),
    E = n(572161),
    d = n(726985),
    _ = n(388032);
let g = (0, u.k4)(a.n.SESSIONS_DESCRIPTION_CATEGORY, { buildLayout: () => [E.Z] }),
    I = (0, u.k4)(a.n.SESSIONS_CATEGORY, {
        buildLayout: () => [S.P, c.m],
        initialize: () => (
            (0, s.fw)(),
            () => {
                (0, s.$Z)();
            }
        ),
    }),
    N = (0, u.wf)(a.n.SESSIONS_PANEL, {
        usePredicate: () => !(0, o.gN)("LegacySessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: T.ZP,
        buildLayout: () => [],
    }),
    A = (0, u.wf)(a.n.SESSIONS_PANEL, {
        usePredicate: () => (0, o.gN)("SessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [g, I],
    }),
    O = (0, u.m7)(a.n.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, o.Gl)("SessionsPanel") ? void 0 : d.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: i.dW3,
        trailing: {
            type: r.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => ((0, o.Gl)("SessionsPanel") ? [A] : [N]),
    });
