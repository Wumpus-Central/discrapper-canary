n.r(t), n.d(t, { default: () => A });
var i = n(200651),
    a = n(192379),
    l = n(442837),
    o = n(37234),
    s = n(230711),
    r = n(410575),
    u = n(503089),
    c = n(110924),
    d = n(100527),
    Z = n(367907),
    f = n(906732),
    _ = n(254901),
    p = n(45493),
    g = n(332473),
    E = n(113434),
    h = n(663389),
    S = n(210887),
    b = n(996733),
    k = n(991346),
    x = n(839469),
    m = n(981631),
    P = n(388032);
let T = a.forwardRef(function () {
        p.Z.trackExposure({ location: 'cd25e4_1' }), _.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), _.Z.trackExposure({ location: 'user_setting_manual' });
        let e = (0, l.e7)([S.Z], () => S.Z.theme),
            t = (0, l.e7)([S.Z], () => (S.Z.darkSidebar ? m.BRd.DARK : void 0)),
            {
                section: n,
                subsection: T,
                analyticsLocation: A,
                analyticsLocations: j
            } = (0, l.cj)([h.Z], () => {
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
            { analyticsLocations: C } = (0, f.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== y || T !== R) &&
                !(function (e) {
                    let { destinationPane: t, originPane: n = null, source: i = null, subsection: a = null, locationStack: l = null, searchQuery: o = null } = e;
                    Z.ZP.trackWithMetadata(m.rMx.SETTINGS_PANE_VIEWED, {
                        settings_type: 'user',
                        origin_pane: n,
                        destination_pane: t,
                        location_stack: l,
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
        let { hasSearchResults: G, searchResults: I } = (0, x.E)(),
            N = (0, k.VO)(),
            w = (0, k.q8)(I),
            q = a.useMemo(() => (G ? w : N), [G, w, N]),
            B = (0, g.b)(),
            L = (0, E.iO)(),
            M = a.useCallback((e) => {
                s.Z.setSection(e);
            }, []);
        return (0, i.jsx)(f.Gt, {
            value: C,
            children: (0, i.jsx)(r.Z, {
                root: !0,
                page: m.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(u.ZP, {
                    theme: e,
                    title: P.intl.string(P.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: M,
                    onClose: o.xf,
                    sections: q,
                    isEligibleForPomelo: B,
                    questsForBadge: L
                })
            })
        });
    }),
    A = a.forwardRef(function () {
        let e = (0, l.e7)([h.Z], () => h.Z.getProps().analyticsLocations),
            { analyticsLocations: t } = (0, f.ZP)(e);
        return (0, i.jsx)(f.Gt, {
            value: t,
            children: (0, i.jsx)(T, {})
        });
    });
