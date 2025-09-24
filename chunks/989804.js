n.r(t), n.d(t, { default: () => w });
var s = n(951288),
    i = n(647438),
    o = n(442837),
    a = n(37234),
    l = n(230711),
    r = n(410575),
    c = n(503089),
    u = n(110924),
    d = n(100527),
    Z = n(906732),
    f = n(254901),
    g = n(45493),
    p = n(332473),
    h = n(113434),
    S = n(984802),
    _ = n(663389),
    b = n(88658),
    E = n(210887),
    m = n(996733),
    x = n(991346),
    k = n(839469),
    P = n(981631),
    T = n(388032);
let j = i.forwardRef(function () {
        g.Z.trackExposure({ location: "cd25e4_1" }),
            f.Z.useExperiment({ location: "user_setting_auto" }, { autoTrackExposure: !1 }),
            f.Z.trackExposure({ location: "user_setting_manual" });
        let e = (0, o.e7)([E.Z], () => E.Z.theme),
            t = (0, S.Ll)(),
            {
                section: n,
                subsection: j,
                analyticsLocation: w,
                analyticsLocations: A,
            } = (0, o.cj)([_.Z], () => {
                let e = _.Z.getSection(),
                    t = _.Z.getSubsection(),
                    { analyticsLocation: n, analyticsLocations: s } = _.Z.getProps();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: n,
                    analyticsLocations: s,
                };
            }),
            C = (0, u.Z)(n),
            v = (0, u.Z)(j),
            y = (0, m.Z7)(),
            { analyticsLocations: G } = (0, Z.ZP)(d.Z.USER_SETTINGS);
        i.useEffect(() => {
            null != n &&
                (n !== C || j !== v) &&
                (0, b.QB)({
                    destinationPane: n,
                    originPane: null != C ? C : null,
                    source: w,
                    subsection: j,
                    locationStack: A,
                    searchQuery: "" !== y ? y : null,
                });
        }, [n, C, j, v, w, A, y]);
        let { hasSearchResults: L, searchResults: R } = (0, k.F)(),
            U = (0, x.VO)(),
            B = (0, x.q8)(R),
            F = i.useMemo(() => (L ? B : U), [L, B, U]),
            I = (0, p.b)(),
            N = (0, h.iO)(),
            q = i.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, s.jsx)(Z.Gt, {
            value: G,
            children: (0, s.jsx)(r.Z, {
                root: !0,
                page: P.ZY5.USER_SETTINGS,
                children: (0, s.jsx)(c.ZP, {
                    theme: e,
                    title: T.intl.string(T.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: q,
                    onClose: a.xf,
                    sections: F,
                    isEligibleForPomelo: I,
                    questsForBadge: N,
                    showUserSettingsSearch: !0,
                }),
            }),
        });
    }),
    w = i.forwardRef(function () {
        let e = (0, o.e7)([_.Z], () => _.Z.getProps().analyticsLocations),
            { analyticsLocations: t } = (0, Z.ZP)(e);
        return (0, s.jsx)(Z.Gt, {
            value: t,
            children: (0, s.jsx)(j, {}),
        });
    });
