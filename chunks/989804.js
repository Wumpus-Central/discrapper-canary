n.r(t), n.d(t, { default: () => A });
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
    f = n(254901),
    g = n(45493),
    h = n(332473),
    p = n(113434),
    S = n(984802),
    _ = n(663389),
    b = n(88658),
    E = n(210887),
    m = n(991346),
    x = n(839469),
    k = n(981631),
    L = n(388032);
let y = a.forwardRef(function () {
        g.Z.trackExposure({ location: "cd25e4_1" }),
            f.Z.useExperiment({ location: "user_setting_auto" }, { autoTrackExposure: !1 }),
            f.Z.trackExposure({ location: "user_setting_manual" });
        let e = (0, o.e7)([E.Z], () => E.Z.theme),
            t = (0, S.Ll)(),
            {
                section: n,
                subsection: y,
                analyticsLocation: A,
                analyticsLocations: T,
            } = (0, o.cj)([_.Z], () => {
                let e = _.Z.getSection(),
                    t = _.Z.getSubsection();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: _.Z.getAnalyticsLocation(),
                    analyticsLocations: _.Z.getAnalyticsLocations(),
                };
            }),
            j = (0, u.Z)(n),
            P = (0, u.Z)(y),
            { analyticsLocations: w } = (0, Z.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== j || y !== P) &&
                (0, b.QB)({
                    destinationPane: n,
                    originPane: null != j ? j : null,
                    source: A,
                    subsection: y,
                    locationStack: T,
                });
        }, [n, j, y, P, A, T]);
        let { hasSearchResults: C, searchResults: v } = (0, x.F)(),
            G = (0, m.VO)(),
            R = (0, m.q8)(v),
            U = a.useMemo(() => (C ? R : G), [C, R, G]),
            B = (0, h.b)(),
            F = (0, p.iO)(),
            I = a.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, i.jsx)(Z.Gt, {
            value: w,
            children: (0, i.jsx)(c.Z, {
                root: !0,
                page: k.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(r.ZP, {
                    theme: e,
                    title: L.intl.string(L.t.cduTBL),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: I,
                    onClose: s.xf,
                    sections: U,
                    isEligibleForPomelo: B,
                    questsForBadge: F,
                    showUserSettingsSearch: !0,
                }),
            }),
        });
    }),
    A = a.forwardRef(function () {
        let e = (0, o.e7)([_.Z], () => _.Z.getAnalyticsLocations()),
            { analyticsLocations: t } = (0, Z.ZP)(e);
        return (0, i.jsx)(Z.Gt, {
            value: t,
            children: (0, i.jsx)(y, {}),
        });
    });
