i.d(e, { u: () => c });
var n = i(627968);
i(64700);
var l = i(934551),
    s = i(611371),
    r = i(757036),
    a = i(967370),
    u = i(557571),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    A = i(368631),
    S = i(410166),
    E = i(985018),
    g = i(895431);
let _ = (0, o.t_)(T.X.PRIVATE_BROWSING_PANEL, {
        useTitle: () => E.intl.string(g.default.UAA4V5),
        useBadge: () => (0, n.jsx)(s.A, {}),
        buildLayout: () => [S.r],
    }),
    c = (0, o.i4)(T.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(g.default.UAA4V5),
        icon: l.GlobeEarthIcon,
        usePredicate: () => {
            let t = (0, r.L)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: i, perkAvailableToUser: n } = (0, u.lV)();
            return (0, a.lM)("private_browsing_perk_settings_page") && (e || i) && (!t || n);
        },
        buildLayout: () => [_],
        trailing: { type: d.S.BADGE_NEW, getDismissibleContentTypes: A.Tq },
    });
