n.d(t, {
    A: () => O,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(311907),
    a = n(554146),
    s = n(102119),
    o = n(563380),
    l = n(47671),
    c = n(346734),
    u = n(332408),
    d = n(233380),
    f = n(826673),
    p = n(379848),
    _ = n(186111),
    h = n(287809),
    m = n(927578),
    g = n(793943),
    E = n(652215),
    b = n(49999),
    y = n(907896);
let O = function (e) {
    let { mobile: t } = e,
        n = (0, i.bG)([_.A], () => _.A.getLayers().includes(E.zgK.USER_SETTINGS)),
        O = (0, i.bG)([h.default], () => m.Ay.canUseClientThemes(h.default.getCurrentUser())),
        A = (0, i.bG)([l.A], () => l.A.isCoachmark),
        v = (0, c.a)(),
        { activePanel: S, metadata: I } = (0, g.fy)(),
        T = [];
    !n && null == S && (A && !O && T.push(a.M.CLIENT_THEMES_COACHMARK), v && O && T.push(a.M.CUSTOM_THEME_COACHMARK));
    let [C, N] = (0, p.kn)(T, b.m.SIDEBAR, !0),
        R = C === a.M.CLIENT_THEMES_COACHMARK,
        w = C === a.M.CUSTOM_THEME_COACHMARK;
    if (n) return null;
    let P = S === g.HP.CLIENT_THEMES || R,
        D = S === g.HP.APP_ICON,
        x = S === g.HP.CUSTOM_THEME || w,
        L = S === g.HP.APPLICATION_TEST_MODE_DEBUG;
    if (!(P || D || x || L)) return null;
    let j = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                P &&
                    (0, r.jsx)(u.A, {
                        markAsDismissed: R
                            ? N
                            : () => {
                                  (0, f.Dr)(a.M.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: b.i.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: R,
                    }),
                D &&
                    (0, r.jsx)(s.A, {
                        isCoachmark: !1,
                        markAsDismissed: N,
                    }),
                x &&
                    (0, r.jsx)(d.A, {
                        metadata: null != I ? I : {},
                        markAsDismissed: N,
                        isCoachmark: w,
                        isMobile: t,
                    }),
                L && (0, r.jsx)(o.A, {}),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: y.A,
              children: j(),
          })
        : j();
};
