n.r(t), n.d(t, { default: () => y });
var i = n(54381),
    a = n(473749),
    o = n(442837),
    s = n(37234),
    l = n(230711),
    c = n(410575),
    r = n(503089),
    u = n(110924),
    d = n(100527),
    Z = n(906732),
    f = n(45493),
    g = n(332473),
    h = n(968843),
    S = n(984802),
    b = n(663389),
    p = n(88658),
    E = n(210887),
    L = n(991346),
    _ = n(839469),
    m = n(981631),
    k = n(388032);
let x = a.forwardRef(function () {
        f.Z.trackExposure({ location: "cd25e4_1" });
        let e = (0, o.e7)([E.Z], () => E.Z.theme),
            t = (0, S.Ll)(),
            {
                section: n,
                subsection: x,
                analyticsLocation: y,
                analyticsLocations: A,
            } = (0, o.cj)([b.Z], () => {
                let e = b.Z.getSection(),
                    t = b.Z.getSubsection();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: b.Z.getAnalyticsLocation(),
                    analyticsLocations: b.Z.getAnalyticsLocations(),
                };
            }),
            j = (0, u.Z)(n),
            P = (0, u.Z)(x),
            { analyticsLocations: T } = (0, Z.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== j || x !== P) &&
                (0, p.QB)({
                    destinationPane: n,
                    originPane: null != j ? j : null,
                    source: y,
                    subsection: x,
                    locationStack: A,
                });
        }, [n, j, x, P, y, A]);
        let { hasSearchResults: w, searchResults: C } = (0, _.F)(),
            v = (0, L.VO)(),
            G = (0, L.q8)(C),
            R = a.useMemo(() => (w ? G : v), [w, G, v]),
            U = (0, g.b)(),
            B = (0, h.iO)(),
            F = a.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, i.jsx)(Z.Gt, {
            value: T,
            children: (0, i.jsx)(c.Z, {
                root: !0,
                page: m.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(r.ZP, {
                    theme: e,
                    title: k.intl.string(k.t.cduTBL),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: F,
                    onClose: s.xf,
                    sections: R,
                    isEligibleForPomelo: U,
                    questsForBadge: B,
                    showUserSettingsSearch: !0,
                }),
            }),
        });
    }),
    y = a.forwardRef(function () {
        let e = (0, o.e7)([b.Z], () => b.Z.getAnalyticsLocations()),
            { analyticsLocations: t } = (0, Z.ZP)(e);
        return (0, i.jsx)(Z.Gt, {
            value: t,
            children: (0, i.jsx)(x, {}),
        });
    });
