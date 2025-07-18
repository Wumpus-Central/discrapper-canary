(n.r(t), n.d(t, { default: () => y }));
var i = n(255367),
    a = n(73800),
    s = n(442837),
    l = n(37234),
    o = n(230711),
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
    h = n(984802),
    S = n(663389),
    b = n(210887),
    k = n(996733),
    x = n(991346),
    m = n(839469),
    P = n(981631),
    T = n(388032);
let j = a.forwardRef(function () {
        (g.Z.trackExposure({ location: 'cd25e4_1' }), _.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), _.Z.trackExposure({ location: 'user_setting_manual' }));
        let e = (0, s.e7)([b.Z], () => b.Z.theme),
            t = (0, h.Ll)(),
            {
                section: n,
                subsection: j,
                analyticsLocation: y,
                analyticsLocations: A
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
            w = (0, c.Z)(n),
            C = (0, c.Z)(j),
            G = (0, k.Z7)(),
            { analyticsLocations: I } = (0, f.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== w || j !== C) &&
                (function (e) {
                    let { destinationPane: t, originPane: n = null, source: i = null, subsection: a = null, locationStack: s = null, searchQuery: l = null } = e;
                    Z.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
                        settings_type: 'user',
                        origin_pane: n,
                        destination_pane: t,
                        location_stack: s,
                        source: i,
                        subsection: a,
                        search_query: l
                    });
                })({
                    destinationPane: n,
                    originPane: null != w ? w : null,
                    source: y,
                    subsection: j,
                    locationStack: A,
                    searchQuery: '' !== G ? G : null
                });
        }, [n, w, j, C, y, A, G]);
        let { hasSearchResults: N, searchResults: v } = (0, m.E)(),
            L = (0, x.VO)(),
            R = (0, x.q8)(v),
            U = a.useMemo(() => (N ? R : L), [N, R, L]),
            q = (0, p.b)(),
            M = (0, E.iO)(),
            B = a.useCallback((e) => {
                o.Z.setSection(e);
            }, []);
        return (0, i.jsx)(f.Gt, {
            value: I,
            children: (0, i.jsx)(r.Z, {
                root: !0,
                page: P.ZY5.USER_SETTINGS,
                children: (0, i.jsx)(u.ZP, {
                    theme: e,
                    title: T.intl.string(T.t.cduTBA),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: B,
                    onClose: l.xf,
                    sections: U,
                    isEligibleForPomelo: q,
                    questsForBadge: M,
                    showUserSettingsSearch: !0
                })
            })
        });
    }),
    y = a.forwardRef(function () {
        let e = (0, s.e7)([S.Z], () => S.Z.getProps().analyticsLocations),
            { analyticsLocations: t } = (0, f.ZP)(e);
        return (0, i.jsx)(f.Gt, {
            value: t,
            children: (0, i.jsx)(j, {})
        });
    });
