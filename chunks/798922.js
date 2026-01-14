n.d(e, { F: () => A });
var i = n(473749),
    l = n(657707),
    s = n(704215),
    u = n(43015),
    r = n(509613),
    a = n(970013),
    o = n(313789),
    T = n(526665),
    S = n(36192),
    c = n(830031),
    E = n(211839),
    d = n(726985),
    _ = n(388032);
let g = (0, r.k4)(o.n.SESSIONS_CATEGORY, {
        buildLayout: () => [c.P, E.m],
        initialize: () => (
            (0, u.fw)(),
            () => {
                (0, u.$Z)();
            }
        ),
        useNotice: function () {
            return i.useMemo(
                () => ({
                    type: a.v.STRONGLY_DISCOURAGED_CUSTOM,
                    notice: S.kC,
                }),
                [],
            );
        },
    }),
    I = (0, r.wf)(o.n.SESSIONS_PANEL, {
        usePredicate: () => !(0, T.gN)("LegacySessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: S.ZP,
        buildLayout: () => [],
    }),
    N = (0, r.wf)(o.n.SESSIONS_PANEL, {
        usePredicate: () => (0, T.gN)("SessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [g],
    }),
    A = (0, r.m7)(o.n.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, T.Gl)("SessionsPanel") ? void 0 : d.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: l.dW3,
        trailing: {
            type: a.W.BADGE_NEW,
            getDismissibleContentTypes: () => [s.z.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => ((0, T.Gl)("SessionsPanel") ? [N] : [I]),
    });
