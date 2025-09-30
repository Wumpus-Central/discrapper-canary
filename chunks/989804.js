n.r(t), n.d(t, { default: () => T });
var i = n(951288),
    a = n(647438),
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
    m = n(996733),
    x = n(991346),
    k = n(839469),
    y = n(981631),
    A = n(388032);
let L = a.forwardRef(function () {
        g.Z.trackExposure({ location: "cd25e4_1" }),
            f.Z.useExperiment({ location: "user_setting_auto" }, { autoTrackExposure: !1 }),
            f.Z.trackExposure({ location: "user_setting_manual" });
        let e = (0, o.e7)([E.Z], () => E.Z.theme),
            t = (0, S.Ll)(),
            {
                section: n,
                subsection: L,
                analyticsLocation: T,
                analyticsLocations: j,
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
            P = (0, u.Z)(n),
            w = (0, u.Z)(L),
            C = (0, m.Z7)(),
            { analyticsLocations: v } = (0, Z.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== P || L !== w) &&
                (0, b.QB)({
                    destinationPane: n,
                    originPane: null != P ? P : null,
                    source: T,
                    subsection: L,
                    locationStack: j,
                    searchQuery: "" !== C ? C : null,
                });
        }, [n, P, L, w, T, j, C]);
        let { hasSearchResults: G, searchResults: R } = (0, k.F)(),
            U = (0, x.VO)(),
            B = (0, x.q8)(R),
            F = a.useMemo(() => (G ? B : U), [G, B, U]),
            I = (0, h.b)(),
            N = (0, p.iO)(),
            q = a.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, i.jsx)(Z.Gt, {
            value: v,
            children: (0, i.jsx)(c.Z, {
                root: !0,
                page: y.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(r.ZP, {
                    theme: e,
                    title: A.intl.string(A.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: q,
                    onClose: s.xf,
                    sections: F,
                    isEligibleForPomelo: I,
                    questsForBadge: N,
                    showUserSettingsSearch: !0,
                }),
            }),
        });
    }),
    T = a.forwardRef(function () {
        let e = (0, o.e7)([_.Z], () => _.Z.getAnalyticsLocations()),
            { analyticsLocations: t } = (0, Z.ZP)(e);
        return (0, i.jsx)(Z.Gt, {
            value: t,
            children: (0, i.jsx)(L, {}),
        });
    });
