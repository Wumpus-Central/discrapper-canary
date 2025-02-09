t.r(n), t.d(n, { default: () => N });
var o = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(37234),
    l = t(230711),
    s = t(410575),
    c = t(503089),
    _ = t(110924),
    d = t(100527),
    u = t(367907),
    b = t(906732),
    E = t(254901),
    g = t(45493),
    m = t(332473),
    R = t(113434),
    f = t(663389),
    S = t(210887),
    C = t(996733),
    T = t(991346),
    B = t(839469),
    h = t(981631),
    k = t(388032);
let p = i.forwardRef(function () {
        g.Z.trackExposure({ location: 'cd25e4_1' }), E.Z.useExperiment({ location: 'user_setting_auto' }, { autoTrackExposure: !1 }), E.Z.trackExposure({ location: 'user_setting_manual' });
        let e = (0, a.e7)([S.Z], () => S.Z.theme),
            n = (0, a.e7)([S.Z], () => (S.Z.darkSidebar ? h.BRd.DARK : void 0)),
            {
                section: t,
                subsection: p,
                analyticsLocation: N,
                analyticsLocations: D
            } = (0, a.cj)([f.Z], () => {
                let e = f.Z.getSection(),
                    n = f.Z.getSubsection(),
                    { analyticsLocation: t, analyticsLocations: o } = f.Z.getProps();
                return {
                    section: e,
                    subsection: n,
                    analyticsLocation: t,
                    analyticsLocations: o
                };
            }),
            O = (0, _.Z)(t),
            A = (0, _.Z)(p),
            I = (0, C.Z7)(),
            { analyticsLocations: U } = (0, b.ZP)(d.Z.USER_SETTINGS);
        i.useEffect(() => {
            null != t &&
                (t !== O || p !== A) &&
                !(function (e) {
                    let { destinationPane: n, originPane: t = null, source: o = null, subsection: i = null, locationStack: a = null, searchQuery: r = null } = e;
                    u.ZP.trackWithMetadata(h.rMx.SETTINGS_PANE_VIEWED, {
                        settings_type: 'user',
                        origin_pane: t,
                        destination_pane: n,
                        location_stack: a,
                        source: o,
                        subsection: i,
                        search_query: r
                    });
                })({
                    destinationPane: t,
                    originPane: null != O ? O : null,
                    source: N,
                    subsection: p,
                    locationStack: D,
                    searchQuery: '' !== I ? I : null
                });
        }, [t, O, p, A, N, D, I]);
        let { hasSearchResults: Z, searchResults: x } = (0, B.E)(),
            F = (0, T.VO)(),
            W = (0, T.q8)(x),
            M = i.useMemo(() => (Z ? W : F), [Z, W, F]),
            L = (0, m.b)(),
            P = (0, R.iO)(),
            H = i.useCallback((e) => {
                l.Z.setSection(e);
            }, []);
        return (0, o.jsx)(b.Gt, {
            value: U,
            children: (0, o.jsx)(s.Z, {
                root: !0,
                page: h.ZY5.USER_SETTINGS,
                children: (0, o.jsx)(c.ZP, {
                    theme: e,
                    title: k.intl.string(k.t.cduTBA),
                    sidebarTheme: n,
                    section: t,
                    onSetSection: H,
                    onClose: r.xf,
                    sections: M,
                    isEligibleForPomelo: L,
                    questsForBadge: P,
                    showUserSettingsSearch: !0
                })
            })
        });
    }),
    N = i.forwardRef(function () {
        let e = (0, a.e7)([f.Z], () => f.Z.getProps().analyticsLocations),
            { analyticsLocations: n } = (0, b.ZP)(e);
        return (0, o.jsx)(b.Gt, {
            value: n,
            children: (0, o.jsx)(p, {})
        });
    });
