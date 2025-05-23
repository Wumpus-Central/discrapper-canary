n.d(t, { Z: () => g }), n(388685), n(539854);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(704215),
    a = n(327943),
    s = n(907459),
    l = n(514361),
    c = n(724145),
    u = n(605236),
    d = n(243778),
    f = n(819640),
    _ = n(594174),
    p = n(74538),
    h = n(981631),
    m = n(921944);
let g = function () {
    let [e, t] = (0, i.Wu)([l.Z], () => [l.Z.isEditorOpen, l.Z.isCoachmark]),
        n = (0, i.e7)([a.Z], () => a.Z.isEditorOpen),
        g = (0, i.e7)([f.Z], () => f.Z.getLayers().includes(h.S9g.USER_SETTINGS)),
        E = (0, i.e7)([_.default], () => p.ZP.canUseClientThemes(_.default.getCurrentUser())),
        b = e && !g,
        y = n && !g,
        O = [];
    g || !t || E || O.push(o.z.CLIENT_THEMES_COACHMARK);
    let [v, I] = (0, d.US)(O, m.R.SIDEBAR, !0),
        S = v === o.z.CLIENT_THEMES_COACHMARK,
        T = b || S,
        A = y && !S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            T &&
                (0, r.jsx)(c.Z, {
                    markAsDismissed: S
                        ? I
                        : () => {
                              (0, u.EW)(o.z.CLIENT_THEMES_COACHMARK, {
                                  dismissAction: m.L.INDIRECT_ACTION,
                                  forceTrack: !0
                              });
                          },
                    showClientThemesCoachmark: S
                }),
            A &&
                (0, r.jsx)(s.Z, {
                    isCoachmark: !1,
                    markAsDismissed: I
                })
        ]
    });
};
