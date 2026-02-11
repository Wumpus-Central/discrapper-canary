i.d(t, { $: () => C, C: () => I });
var n = i(64700),
    l = i(934551),
    s = i(554146),
    r = i(200921),
    a = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(358776),
    _ = i(119762),
    T = i(119695),
    A = i(766761),
    S = i(531525),
    E = i(985018);
let c = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        buildLayout: () => [T.I, A.A],
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return n.useMemo(() => ({ type: u.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _.jH }), []);
        },
    }),
    g = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => !(0, d.dk)("LegacySessionsPanel"),
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: _.Ay,
        buildLayout: () => [],
    }),
    I = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => (0, d.dk)("SessionsPanel"),
        useTitle: () => ((0, d._A)("SessionsPanel") ? E.intl.string(E.t.mEndXM) : E.intl.string(E.t["+1h0k/"])),
        hideInStreamerMode: !0,
        buildLayout: () => [c],
    }),
    C = (0, a.i4)(o.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, d.WJ)("SessionsPanel") ? void 0 : S.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: l.LaptopPhoneIcon,
        trailing: { type: u.Si.BADGE_NEW, getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW] },
        buildLayout: () => ((0, d.WJ)("SessionsPanel") ? [I] : [g]),
        usePredicate: () => !(0, d._A)("SessionsPanel"),
    });
