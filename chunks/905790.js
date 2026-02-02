n.d(t, {
    A: () => y,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(311907),
    a = n(554146),
    o = n(102119),
    s = n(563380),
    l = n(47671),
    c = n(346734),
    u = n(332408),
    d = n(233380),
    f = n(826673),
    p = n(379848),
    _ = n(287809),
    h = n(927578),
    m = n(793943),
    g = n(49999),
    E = n(907896);
let y = function (e) {
    let { mobile: t } = e,
        n = (0, i.bG)([_.default], () => h.Ay.canUseClientThemes(_.default.getCurrentUser())),
        y = (0, i.bG)([l.A], () => l.A.isCoachmark),
        b = (0, c.a)(),
        { activePanel: O, metadata: v } = (0, m.fy)(),
        A = [];
    null == O && (y && !n && A.push(a.M.CLIENT_THEMES_COACHMARK), b && n && A.push(a.M.CUSTOM_THEME_COACHMARK));
    let [I, S] = (0, p.kn)(A, g.m.SIDEBAR, !0),
        T = I === a.M.CLIENT_THEMES_COACHMARK,
        C = I === a.M.CUSTOM_THEME_COACHMARK,
        N = O === m.HP.CLIENT_THEMES || T,
        w = O === m.HP.APP_ICON,
        R = O === m.HP.CUSTOM_THEME || C,
        P = O === m.HP.APPLICATION_TEST_MODE_DEBUG;
    if (!(N || w || R || P)) return null;
    let D = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                N &&
                    (0, r.jsx)(u.A, {
                        markAsDismissed: T
                            ? S
                            : () => {
                                  (0, f.Dr)(a.M.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: g.i.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: T,
                    }),
                w &&
                    (0, r.jsx)(o.A, {
                        isCoachmark: !1,
                        markAsDismissed: S,
                    }),
                R &&
                    (0, r.jsx)(d.A, {
                        metadata: null != v ? v : {},
                        markAsDismissed: S,
                        isCoachmark: C,
                        isMobile: t,
                    }),
                P && (0, r.jsx)(s.A, {}),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: E.A,
              children: D(),
          })
        : D();
};
