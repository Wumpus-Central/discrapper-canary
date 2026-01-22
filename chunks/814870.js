i.d(e, { u: () => g });
var n = i(627968);
i(64700);
var l = i(934551),
    s = i(611371),
    r = i(757036),
    u = i(967370),
    a = i(557571),
    o = i(419954),
    T = i(933297),
    A = i(780964),
    S = i(368631),
    E = i(410166),
    d = i(985018),
    _ = i(895431);
let I = (0, o.t_)(A.X.PRIVATE_BROWSING_PANEL, {
        useTitle: () => d.intl.string(_.default.UAA4V5),
        useBadge: () => (0, n.jsx)(s.A, {}),
        buildLayout: () => [E.r],
    }),
    g = (0, o.i4)(A.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(_.default.UAA4V5),
        icon: l.GlobeEarthIcon,
        usePredicate: () => {
            let t = (0, r.L)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: i, perkAvailableToUser: n } = (0, a.lV)(),
                { enabled: l } = u.S.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || i) && (!t || n);
        },
        buildLayout: () => [I],
        trailing: {
            type: T.S.BADGE_NEW,
            getDismissibleContentTypes: S.Tq,
        },
    });
