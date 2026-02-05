i.d(e, { $: () => N });
var n = i(64700),
    l = i(934551),
    s = i(554146),
    r = i(200921),
    a = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(358776),
    T = i(119762),
    A = i(119695),
    S = i(766761),
    E = i(531525),
    g = i(985018);
let _ = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        buildLayout: () => [A.I, S.A],
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return n.useMemo(() => ({ type: u.W.STRONGLY_DISCOURAGED_CUSTOM, notice: T.jH }), []);
        },
    }),
    c = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => !(0, d.dk)("LegacySessionsPanel"),
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: T.Ay,
        buildLayout: () => [],
    }),
    I = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => (0, d.dk)("SessionsPanel"),
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [_],
    }),
    N = (0, a.i4)(o.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, d.WJ)("SessionsPanel") ? void 0 : E.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: l.LaptopPhoneIcon,
        trailing: { type: u.S.BADGE_NEW, getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW] },
        buildLayout: () => ((0, d.WJ)("SessionsPanel") ? [I] : [c]),
    });
