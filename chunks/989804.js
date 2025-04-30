n.r(t), n.d(t, { default: () => A });
var i = n(200651),
    a = n(192379),
    s = n(442837),
    o = n(37234),
    l = n(230711),
    r = n(410575),
    u = n(503089),
    c = n(110924),
    d = n(100527),
    Z = n(367907),
    f = n(906732),
    _ = n(254901),
    g = n(45493),
    p = n(332473),
    E = n(113434),
    h = n(663389),
    S = n(210887),
    b = n(996733),
    k = n(991346),
    x = n(839469),
    m = n(981631),
    P = n(388032);
let T = a.forwardRef(function () {
        g.Z.trackExposure({ location: 'cd25e4_1' }), _.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), _.Z.trackExposure({ location: 'user_setting_manual' });
        let e = (0, s.e7)([S.Z], () => S.Z.theme),
            t = (0, s.e7)([S.Z], () => (S.Z.darkSidebar ? m.BRd.DARK : void 0)),
            {
                section: n,
                subsection: T,
                analyticsLocation: A,
                analyticsLocations: j
            } = (0, s.cj)([h.Z], () => {
                let e = h.Z.getSection(),
                    t = h.Z.getSubsection(),
                    { analyticsLocation: n, analyticsLocations: i } = h.Z.getProps();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: n,
                    analyticsLocations: i
                };
            }),
            y = (0, c.Z)(n),
            R = (0, c.Z)(T),
            v = (0, b.Z7)(),
            { analyticsLocations: w } = (0, f.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== y || T !== R) &&
                (function (e) {
                    let { destinationPane: t, originPane: n = null, source: i = null, subsection: a = null, locationStack: s = null, searchQuery: o = null } = e;
                    Z.ZP.trackWithMetadata(m.rMx.SETTINGS_PANE_VIEWED, {
                        settings_type: 'user',
                        origin_pane: n,
                        destination_pane: t,
                        location_stack: s,
                        source: i,
                        subsection: a,
                        search_query: o
                    });
                })({
                    destinationPane: n,
                    originPane: null != y ? y : null,
                    source: A,
                    subsection: T,
                    locationStack: j,
                    searchQuery: '' !== v ? v : null
                });
        }, [n, y, T, R, A, j, v]);
        let { hasSearchResults: C, searchResults: G } = (0, x.E)(),
            I = (0, k.VO)(),
            N = (0, k.q8)(G),
            U = a.useMemo(() => (C ? N : I), [C, N, I]),
            q = (0, p.b)(),
            B = (0, E.iO)(),
            L = a.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, i.jsx)(f.Gt, {
            value: w,
            children: (0, i.jsx)(r.Z, {
                root: !0,
                page: m.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(u.ZP, {
                    theme: e,
                    title: P.intl.string(P.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: L,
                    onClose: o.xf,
                    sections: U,
                    isEligibleForPomelo: q,
                    questsForBadge: B,
                    showUserSettingsSearch: !0
                })
            })
        });
    }),
    A = a.forwardRef(function () {
        let e = (0, s.e7)([h.Z], () => h.Z.getProps().analyticsLocations),
            { analyticsLocations: t } = (0, f.ZP)(e);
        return (0, i.jsx)(f.Gt, {
            value: t,
            children: (0, i.jsx)(T, {})
        });
    });
