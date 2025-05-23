n.d(t, { Z: () => O }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(114858),
    a = n(442837),
    s = n(704215),
    l = n(570140),
    c = n(94795),
    u = n(327943),
    d = n(907459),
    f = n(514361),
    _ = n(724145),
    p = n(605236),
    h = n(243778),
    m = n(819640),
    g = n(594174),
    E = n(74538),
    b = n(981631),
    y = n(921944);
let O = function () {
    let { pathname: e } = (0, o.TH)(),
        [t, n] = (0, a.Wu)([f.Z], () => [f.Z.isEditorOpen, f.Z.isCoachmark]),
        O = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
        v = (0, a.e7)([m.Z], () => m.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
        I = (0, a.e7)([g.default], () => E.ZP.canUseClientThemes(g.default.getCurrentUser())),
        S = t && !v,
        T = O && !v,
        A = [];
    v || !n || I || A.push(s.z.CLIENT_THEMES_COACHMARK);
    let [N, C] = (0, h.US)(A, y.R.SIDEBAR, !0);
    A.push(s.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let P = N === s.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        R = N === s.z.CLIENT_THEMES_COACHMARK;
    i.useEffect(() => {
        null ==
            (0, o.LX)(e, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            P &&
            !R &&
            ((0, c.nJ)(),
            l.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: C
            }));
    }, [P, R, C, e]);
    let w = S || R,
        D = T && !R;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w &&
                (0, r.jsx)(_.Z, {
                    markAsDismissed: R
                        ? C
                        : () => {
                              (0, p.EW)(s.z.CLIENT_THEMES_COACHMARK, {
                                  dismissAction: y.L.INDIRECT_ACTION,
                                  forceTrack: !0
                              });
                          },
                    showClientThemesCoachmark: R
                }),
            D &&
                (0, r.jsx)(d.Z, {
                    isCoachmark: P,
                    markAsDismissed: C
                })
        ]
    });
};
