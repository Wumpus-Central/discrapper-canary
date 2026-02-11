i.d(t, { u: () => g });
var n = i(627968);
i(64700);
var l = i(934551),
    s = i(611371),
    r = i(757036),
    a = i(967370),
    u = i(557571),
    o = i(419954),
    d = i(933297),
    _ = i(780964),
    T = i(368631),
    A = i(410166),
    S = i(985018),
    E = i(895431);
let c = (0, o.t_)(_.X.PRIVATE_BROWSING_PANEL, {
        useTitle: () => S.intl.string(E.default.UAA4V5),
        useBadge: () => (0, n.jsx)(s.A, {}),
        buildLayout: () => [A.r],
    }),
    g = (0, o.i4)(_.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(E.default.UAA4V5),
        icon: l.GlobeEarthIcon,
        usePredicate: () => {
            let e = (0, r.L)(),
                { isSupportedPrivateBrowsingPerkPlatform: t, isWeb: i, perkAvailableToUser: n } = (0, u.lV)();
            return (0, a.lM)("private_browsing_perk_settings_page") && (t || i) && (!e || n);
        },
        buildLayout: () => [c],
        trailing: { type: d.Si.BADGE_NEW, getDismissibleContentTypes: T.Tq },
    });
