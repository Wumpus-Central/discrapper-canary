i.d(e, { $: () => N });
var n = i(64700),
    l = i(934551),
    s = i(554146),
    r = i(200921),
    u = i(419954),
    a = i(933297),
    o = i(780964),
    T = i(358776),
    A = i(119762),
    S = i(119695),
    E = i(766761),
    d = i(531525),
    _ = i(985018);
let I = (0, u.zZ)(o.X.SESSIONS_CATEGORY, {
        buildLayout: () => [S.I, E.A],
        initialize: () => (
            (0, r.GY)(),
            () => {
                (0, r.ZQ)();
            }
        ),
        useNotice: function () {
            return n.useMemo(
                () => ({
                    type: a.W.STRONGLY_DISCOURAGED_CUSTOM,
                    notice: A.jH,
                }),
                [],
            );
        },
    }),
    g = (0, u.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => !(0, T.dk)("LegacySessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: A.Ay,
        buildLayout: () => [],
    }),
    c = (0, u.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => (0, T.dk)("SessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [I],
    }),
    N = (0, u.i4)(o.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        getLegacySearchKey: () => ((0, T.WJ)("SessionsPanel") ? void 0 : d.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2),
        icon: l.LaptopPhoneIcon,
        trailing: {
            type: a.S.BADGE_NEW,
            getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW],
        },
        buildLayout: () => ((0, T.WJ)("SessionsPanel") ? [c] : [g]),
    });
