n.r(t), n.d(t, { default: () => j });
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
    _ = n(906732),
    f = n(254901),
    g = n(45493),
    p = n(332473),
    E = n(113434),
    S = n(663389),
    h = n(210887),
    b = n(996733),
    k = n(991346),
    m = n(295545),
    x = n(839469),
    P = n(981631),
    T = n(388032);
let A = a.forwardRef(function () {
        g.Z.trackExposure({ location: 'cd25e4_1' }), f.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), f.Z.trackExposure({ location: 'user_setting_manual' });
        let e = (0, s.e7)([h.Z], () => h.Z.theme),
            t = (0, s.e7)([h.Z], () => (h.Z.darkSidebar ? P.BRd.DARK : void 0)),
            {
                section: n,
                subsection: A,
                analyticsLocation: j,
                analyticsLocations: y
            } = (0, s.cj)([S.Z], () => {
                let e = S.Z.getSection(),
                    t = S.Z.getSubsection(),
                    { analyticsLocation: n, analyticsLocations: i } = S.Z.getProps();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: n,
                    analyticsLocations: i
                };
            }),
            R = (0, c.Z)(n),
            v = (0, c.Z)(A),
            C = (0, b.Z7)(),
            { analyticsLocations: G } = (0, _.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== R || A !== v) &&
                !(function (e) {
                    let { destinationPane: t, originPane: n = null, source: i = null, subsection: a = null, locationStack: s = null, searchQuery: o = null } = e;
                    Z.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
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
                    originPane: null != R ? R : null,
                    source: j,
                    subsection: A,
                    locationStack: y,
                    searchQuery: '' !== C ? C : null
                });
        }, [n, R, A, v, j, y, C]);
        let I = (0, m.eA)({ location: 'user_settings' }),
            { hasSearchResults: N, searchResults: w } = (0, x.E)(),
            M = a.useMemo(() => I && N, [I, N]),
            U = (0, k.VO)(),
            q = (0, k.q8)(w),
            B = a.useMemo(() => (M ? q : U), [M, q, U]),
            L = (0, p.b)(),
            D = (0, E.iO)(),
            F = a.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, i.jsx)(_.Gt, {
            value: G,
            children: (0, i.jsx)(r.Z, {
                root: !0,
                page: P.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(u.ZP, {
                    theme: e,
                    title: T.intl.string(T.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: F,
                    onClose: o.xf,
                    sections: B,
                    isEligibleForPomelo: L,
                    questsForBadge: D,
                    isUserSettingsSearchEnabled: I
                })
            })
        });
    }),
    j = a.forwardRef(function () {
        let e = (0, s.e7)([S.Z], () => S.Z.getProps().analyticsLocations),
            { analyticsLocations: t } = (0, _.ZP)(e);
        return (0, i.jsx)(_.Gt, {
            value: t,
            children: (0, i.jsx)(A, {})
        });
    });
